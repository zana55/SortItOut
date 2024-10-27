package com.example.application.views.main.parser;

public abstract class Memory_Element<T> {
    protected Memory_Element_Type type;
    protected T data;

    public Memory_Element(T d) {
        type = Memory_Element_Type.undefined;
        data = d;
    }

    public abstract T get_value();

    public abstract void set_value(T value);
}