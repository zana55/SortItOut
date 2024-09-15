package com.example.application.views;

import com.example.application.views.about.AboutView;
import com.example.application.views.main.MainView;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Header;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.theme.lumo.LumoUtility;

/**
 * The main view is a top-level placeholder for other views.
 */
public class MainLayout extends AppLayout {

    private H1 viewTitle;

    public MainLayout() {
        addHeaderContent();
    }

    private void addHeaderContent() {
        // Create a title
        viewTitle = new H1("Sort-it-out!");
        viewTitle.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.XXXLARGE, LumoUtility.Margin.MEDIUM);
        //viewTitle.getStyle().set("background-color", "#FFF0F5");

        // Create navigation links
        RouterLink mainViewLink = new RouterLink("Home", MainView.class);
        RouterLink aboutViewLink = new RouterLink("About", AboutView.class);
        mainViewLink.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.MEDIUM, LumoUtility.Margin.MEDIUM);
        aboutViewLink.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.MEDIUM, LumoUtility.Margin.MEDIUM);

        // Navigation bar layout
        HorizontalLayout navBar = new HorizontalLayout(mainViewLink, aboutViewLink);
        navBar.setAlignItems(FlexComponent.Alignment.CENTER); // Align items in the center
        navBar.setSpacing(true); // Add some spacing between the links
        //navBar.getStyle().set("background-color", "#FFF0F5");

        // Header layout
        Header header = new Header(new HorizontalLayout(viewTitle, navBar));
        header.getStyle().set("width", "100%");
        header.getStyle().set("padding", "0 1em");
        header.getStyle().set("align-items", "center");
        header.getStyle().set("justify-content", "space-between");
        //header.getStyle().set("background-color", "#FFF0F5");

        addToNavbar(header);
    }

    @Override
    protected void afterNavigation() {
        super.afterNavigation();
        viewTitle.setText(getCurrentPageTitle());
    }

    private String getCurrentPageTitle() {
        PageTitle title = getContent().getClass().getAnnotation(PageTitle.class);
        return title == null ? "" : title.value();
    }
}
