package com.example.application.views;

import com.example.application.views.about.AboutView;
import com.example.application.views.database.DataView;
import com.example.application.views.main.MainView;
import com.vaadin.flow.component.UI;
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

        viewTitle = new H1("Sort-it-out!");
        viewTitle.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.XXXLARGE, LumoUtility.Margin.MEDIUM);

        RouterLink mainViewLink = new RouterLink("Home", MainView.class);
        RouterLink aboutViewLink = new RouterLink("About custom algorithms", AboutView.class);
        RouterLink dataViewLink = new RouterLink("Statistics for algorithms", DataView.class);
        mainViewLink.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.MEDIUM, LumoUtility.Margin.MEDIUM);
        aboutViewLink.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.MEDIUM, LumoUtility.Margin.MEDIUM);
        dataViewLink.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.MEDIUM, LumoUtility.Margin.MEDIUM);

        HorizontalLayout navBar = new HorizontalLayout(mainViewLink, aboutViewLink, dataViewLink);
        navBar.setAlignItems(FlexComponent.Alignment.CENTER);
        navBar.setSpacing(true);

        Header header = new Header(new HorizontalLayout(viewTitle, navBar));
        header.getStyle().set("width", "100%");
        header.getStyle().set("padding", "0 1em");
        header.getStyle().set("align-items", "center");
        header.getStyle().set("justify-content", "space-between");

        addToNavbar(header);
    }

    @Override
    protected void afterNavigation() {
        super.afterNavigation();
        viewTitle.setText(getCurrentPageTitle());

        UI.getCurrent().getPage().getHistory().replaceState(null, getCurrentPageUrl());
    }

    private String getCurrentPageUrl() {

        RouterLink currentLink = new RouterLink("", getContent().getClass());
        return currentLink.getHref();
    }

    private String getCurrentPageTitle() {
        PageTitle title = getContent().getClass().getAnnotation(PageTitle.class);
        return title == null ? "" : title.value();
    }
}
