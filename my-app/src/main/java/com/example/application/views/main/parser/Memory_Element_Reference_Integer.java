package com.example.application.views.main.parser;

public class Memory_Element_Reference_Integer extends Memory_Element<String> {

    public Memory_Element_Reference_Integer(String d) {
        super(d);
        type = Memory_Element_Type.variable_ref;
    }

    @Override
    public String get_value() {
        return data;
    }

    @Override
    public void set_value(String value) {
        // should not be called
    }

}