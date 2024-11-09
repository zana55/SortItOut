package com.example.application.views.about;

public class ParameterInfo {
    private String type;
    private String about;
    private String syntax;

    public ParameterInfo(String type, String about, String syntax) {
        this.type = type;
        this.about = about;
        this.syntax = syntax;
    }

    public String getType() {
        return type;
    }

    public String getAbout() {
        return about;
    }
    public String getSyntax() {
        return syntax;
    }
}
