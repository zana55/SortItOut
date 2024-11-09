package com.example.application.views.admin;

import com.example.application.entities.CARepository;
import com.example.application.entities.CustomAlgorithm;
import com.example.application.services.SecurityService;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinServletRequest;
import jakarta.annotation.security.RolesAllowed;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;

@PageTitle("Admin page")
@Route(value = "/admin", layout = MainLayout.class)
@RolesAllowed("ADMIN")
public class AdminView extends VerticalLayout{
    private final CARepository caRepository;
    private final Grid<CustomAlgorithm> grid = new Grid<>(CustomAlgorithm.class);
    private final TextField nameField = new TextField("Algorithm Name");
    private final TextArea codeField = new TextArea("Algorithm Code");
    private final Button deleteButton = new Button("Delete");
    private final Button editButton = new Button("Edit");
    private final Button saveButton = new Button("Save");

    private CustomAlgorithm selectedAlgorithm;
    private SecurityService securityService;

    public AdminView(@Autowired SecurityService securityService, CARepository caRepository) {

        this.securityService = securityService;
        this.caRepository = caRepository;

        Button logout = new Button("Logout", event -> {
            HttpServletRequest request = VaadinServletRequest.getCurrent().getHttpServletRequest();
            securityService.logout(request);
        });

        HorizontalLayout logoutLayout = new HorizontalLayout(logout);
        logoutLayout.setWidthFull();
        logoutLayout.setJustifyContentMode(JustifyContentMode.END);

        add(logoutLayout);

        configureGrid();
        configureButtons();

        HorizontalLayout buttonLayout = new HorizontalLayout(deleteButton, editButton);
        buttonLayout.setWidthFull();
        buttonLayout.setJustifyContentMode(JustifyContentMode.CENTER);

        nameField.setWidth("25%");
        codeField.setWidth("30%");
        codeField.setHeight("250px");
        nameField.setVisible(false);
        codeField.setVisible(false);
        saveButton.setVisible(false);

        HorizontalLayout fieldLayout = new HorizontalLayout(nameField, codeField, saveButton);
        fieldLayout.setWidthFull();
        fieldLayout.setJustifyContentMode(JustifyContentMode.CENTER);

        add(grid, buttonLayout , fieldLayout, fieldLayout);
        updateGrid();
    }

    private void configureGrid() {
        grid.removeAllColumns();
        grid.addColumn(CustomAlgorithm::getAlgorithmName).setHeader("Algorithm Name");

        grid.addComponentColumn(customAlgorithm -> {
            TextArea codeArea = new TextArea();
            codeArea.setValue(customAlgorithm.getAlgorithmCode());
            codeArea.setReadOnly(true);
            codeArea.setWidthFull();

            codeArea.setHeight("250px");
            codeArea.getStyle().set("white-space", "pre-wrap");
            codeArea.getStyle().set("overflow", "hidden");
            return codeArea;
        }).setHeader("Algorithm Code");

        grid.setSelectionMode(Grid.SelectionMode.SINGLE);
        grid.addSelectionListener(event -> {
            selectedAlgorithm = event.getFirstSelectedItem().orElse(null);
            deleteButton.setEnabled(selectedAlgorithm != null);
            editButton.setEnabled(selectedAlgorithm != null);
        });
    }

    private void configureButtons() {
        deleteButton.setEnabled(false);
        editButton.setEnabled(false);

        saveButton.getStyle().set("margin-top", "50px");

        deleteButton.addClickListener(event -> {
            if (selectedAlgorithm != null) {

                Dialog confirmDialog = new Dialog();

                confirmDialog.setHeaderTitle("Confirm Deletion");

                confirmDialog.add(new VerticalLayout(new Span("Are you sure you want to delete this item?")));

                Button confirmButton = new Button("Yes", e -> {
                    caRepository.delete(selectedAlgorithm);
                    selectedAlgorithm = null;
                    updateGrid();
                    confirmDialog.close();
                    Notification.show("Algorithm deleted", 3000, Notification.Position.BOTTOM_START);
                });

                Button cancelButton = new Button("No", e -> confirmDialog.close());

                HorizontalLayout buttonLayout = new HorizontalLayout(confirmButton, cancelButton);
                confirmDialog.getFooter().add(buttonLayout);

                confirmDialog.open();
            }
        });

        editButton.addClickListener(event -> {
            if (selectedAlgorithm != null) {
                nameField.setVisible(true);
                codeField.setVisible(true);
                saveButton.setVisible(true);
                nameField.setValue(selectedAlgorithm.getAlgorithmName());
                codeField.setValue(selectedAlgorithm.getAlgorithmCode());
            }
        });

        saveButton.addClickListener(event -> {
            if (selectedAlgorithm != null) {
                selectedAlgorithm.setAlgorithmName(nameField.getValue());
                selectedAlgorithm.setAlgorithmCode(codeField.getValue());
                caRepository.save(selectedAlgorithm);
                updateGrid();
                Notification.show("Changes saved!", 3000, Notification.Position.BOTTOM_START);
            }
        });
    }

    private void updateGrid() {
        grid.setItems(caRepository.findAll());
    }
}