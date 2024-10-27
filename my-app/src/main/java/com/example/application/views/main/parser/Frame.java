package com.example.application.views.main.parser;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;

public class Frame {
    private HashMap<String, Memory_Element<?>> frame_data;

    public Frame() {
        frame_data = new HashMap<>();
    }

    public void add_variable(String key, Integer value) {
        frame_data.put(key, new Memory_Element_Integer(value));
    }

    public void add_reference(String variable, String ref_to) {
        frame_data.put(variable, new Memory_Element_Reference_Integer(ref_to));
    }

    public void add_array(String name, ArrayList<Integer> array) {
        frame_data.put(name, new Memory_Element_Array(array));
    }

    public void add_reference_array(String array, String ref_to) {
        frame_data.put(array, new Memory_Element_Reference_Array(ref_to));
    }

    public Integer get_value(String key) {
        Memory_Element<?> element = frame_data.get(key);
        if(element == null) {
            throw new IllegalArgumentException("Variable " + key + " is not defined!");
        }
        if(element.type != Memory_Element_Type.variable) {
            throw new RuntimeException(key + " is not a variable!");
        }
        return (Integer) element.get_value();
    }

    @SuppressWarnings("unchecked")
    public Integer get_value_at_index(String key, Integer index) {
        Memory_Element<?> element = frame_data.get(key);
        if(element == null) {
            throw new IllegalArgumentException("Array " + key + " is not defined!");
        }
        if(element.type != Memory_Element_Type.array) {
            throw new RuntimeException(key + " is not an array!");
        }
        ArrayList<Integer> cast = (ArrayList<Integer>) element.get_value();
        return cast.get(index);
    }

    @SuppressWarnings("unchecked")
    public void add_value_to_index(String name, Integer index, Integer value) {
        Memory_Element<?> element = frame_data.get(name);
        if(element == null) {
            throw new IllegalArgumentException("Array " + name + " is not defined!");
        }
        if(element.type != Memory_Element_Type.array) {
            throw new RuntimeException(name + " is not an array!");
        }
        ArrayList<Integer> cast = (ArrayList<Integer>) element.get_value();
        cast.set(index, value);
    }

    @SuppressWarnings("unchecked")
    public ArrayList<Integer> get_array(String key){
        Memory_Element<?> element = frame_data.get(key);
        if(element == null) {
            throw new IllegalArgumentException("Array " + key + " is not defined!");
        }
        if(element.type != Memory_Element_Type.array) {
            throw new RuntimeException(key + " is not an array!");
        }
        return (ArrayList<Integer>) element.get_value();
    }

    @SuppressWarnings("unchecked")
    public Integer get_array_size(String key) {
        Memory_Element<?> element = frame_data.get(key);
        if(element == null) {
            throw new IllegalArgumentException("Array " + key + " is not defined!");
        }
        if(element.type != Memory_Element_Type.array) {
            throw new RuntimeException(key + " is not an array!");
        }
        ArrayList<Integer> cast = (ArrayList<Integer>) element.get_value();
        return cast.size();
    }

    public String get_ref_name(String key) {
        Memory_Element<?> element = frame_data.get(key);
        if(element.type != Memory_Element_Type.variable_ref
                && element.type != Memory_Element_Type.array_ref ) {
            throw new RuntimeException(key + " is not a reference!");
        }
        return (String) element.get_value();
    }

    public Memory_Element_Type get_type(String key) {
        Memory_Element<?> element = frame_data.get(key);
        if(element == null) return Memory_Element_Type.undefined;
        return element.type;
    }

    public ArrayList<String> get_frame_state(){
        ArrayList<String> top_frame_keys = new ArrayList<String>();
        for (Map.Entry<String, Memory_Element<?>> entry : frame_data.entrySet()) {
            top_frame_keys.add(entry.getKey());
        }
        return top_frame_keys;
    }

    public void update_with(ArrayList<String> state) {
        Iterator<Map.Entry<String, Memory_Element<?>>> iterator = frame_data.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, Memory_Element<?>> entry = iterator.next();
            if (!state.contains(entry.getKey())) {
                iterator.remove();
            }
        }
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, Memory_Element<?>> entry : frame_data.entrySet()) {
            String key = entry.getKey();
            Memory_Element<?> value = entry.getValue();
            switch(value.type) {
                case variable:
                    sb.append(key + ": " + value.get_value() + "\n");
                    break;
                case variable_ref:
                    sb.append(key + ": <ref: " + value.get_value() + ">\n");
                    break;
                case array:
                    sb.append(key + ": " + value.get_value() + "\n");
                    break;
                case array_ref:
                    sb.append(key + ": <ref[]: " + value.get_value() + ">\n");
                    break;
                default:
                    break;
            }
        }
        return sb.toString();
    }
}

