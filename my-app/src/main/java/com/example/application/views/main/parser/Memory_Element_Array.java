package com.example.application.views.main.parser;

import java.util.ArrayList;

public class Memory_Element_Array extends Memory_Element<ArrayList<Integer>>{

    public Memory_Element_Array(ArrayList<Integer> d) {
        super(d);
        type = Memory_Element_Type.array;
    }

    @Override
    public ArrayList<Integer> get_value() {
        return data;
    }

    @Override
    public void set_value(ArrayList<Integer> value) {
        data = value;
    }

}

