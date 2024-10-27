package com.example.application.views.main.parser;

public class Memory_Element_Integer extends Memory_Element<Integer> {

    public Memory_Element_Integer(Integer d) {
        super(d);
        type = Memory_Element_Type.variable;
    }

    @Override
    public Integer get_value() {
        return data;
    }

    @Override
    public void set_value(Integer value) {
        data = value;
    }

}