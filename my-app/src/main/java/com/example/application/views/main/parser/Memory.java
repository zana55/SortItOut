package com.example.application.views.main.parser;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Memory {
    private ArrayList<Frame> memory;
    private HashMap<String, Function_Definition_Node> functions;

    public Memory() {
        memory = new ArrayList<>();
        memory.add(new Frame());
        functions = new HashMap<>();
    }

    public void append_frame(Frame frame) {
        memory.add(frame);
    }

    public void pop_frame() {
        memory.remove(memory.size() - 1);
    }

    public void add_variable(String key, Integer value) {
        MutableString mut_str = new MutableString(key);
        Frame correct_frame = get_correct_frame(mut_str, Memory_Element_Type.variable_ref, Memory_Element_Type.variable);
        correct_frame.add_variable(mut_str.str, value);
    }

    public void add_reference(String variable, String ref_to) {
        int frame_number = memory.size() - 1;
        Frame top_frame = memory.get(frame_number);
        top_frame.add_reference(variable, ref_to);
    }

    public void add_reference_array(String variable, String ref_to) {
        int frame_number = memory.size() - 1;
        Frame top_frame = memory.get(frame_number);
        top_frame.add_reference_array(variable, ref_to);
    }

    public Integer get_variable_value(String key) {
        MutableString mut_str = new MutableString(key);
        Frame correct_frame = get_correct_frame(mut_str, Memory_Element_Type.variable_ref, Memory_Element_Type.variable);
        return correct_frame.get_value(mut_str.str);
    }

    public ArrayList<Integer> get_global_data(){
        Frame correct_frame = memory.get(0);
        return correct_frame.get_array("data");
    }

    public ArrayList<Integer> get_array(String key){
        MutableString mut_str = new MutableString(key);
        Frame correct_frame = get_correct_frame(mut_str, Memory_Element_Type.array_ref, Memory_Element_Type.array);
        return correct_frame.get_array(mut_str.str);
    }

    public Integer get_array_size(String key) {
        MutableString mut_str = new MutableString(key);
        Frame correct_frame = get_correct_frame(mut_str, Memory_Element_Type.array_ref, Memory_Element_Type.array);
        return correct_frame.get_array_size(mut_str.str);
    }

    public Integer get_value_at_index(String name, Integer index) {
        MutableString mut_str = new MutableString(name);
        Frame correct_frame = get_correct_frame(mut_str, Memory_Element_Type.array_ref, Memory_Element_Type.array);
        return correct_frame.get_value_at_index(mut_str.str, index);
    }

    public void add_value_to_index(String name, Integer index, Integer value) {
        MutableString mut_str = new MutableString(name);
        Frame correct_frame = get_correct_frame(mut_str, Memory_Element_Type.array_ref, Memory_Element_Type.array);
        correct_frame.add_value_to_index(mut_str.str, index, value);
    }

    public void add_function(String name, Function_Definition_Node function) {
        Function_Definition_Node exists = functions.get(name);
        if(exists != null) {
            throw new IllegalArgumentException("Redefinition of function " + name + "!");
        }
        functions.put(name, function);
    }

    public Function_Definition_Node get_function(String name) {
        Function_Definition_Node function = functions.get(name);
        if(function == null) {
            throw new IllegalArgumentException("Function " + name + " is called but not defined!");
        }
        return function;
    }

    public void add_array(String name, ArrayList<Integer> array) {
        MutableString mut_str = new MutableString(name);
        Frame correct_frame = get_correct_frame(mut_str, Memory_Element_Type.array_ref, Memory_Element_Type.array);
        correct_frame.add_array(mut_str.str, array);
    }

    public ArrayList<String> save_top_frame_state(){
        int frame_number = memory.size() - 1;
        Frame correct_frame = memory.get(frame_number);
        return correct_frame.get_frame_state();
    }

    public void update_with(ArrayList<String> state) {
        int frame_number = memory.size() - 1;
        Frame correct_frame = memory.get(frame_number);
        correct_frame.update_with(state);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for(int i = memory.size() - 1; i >= 0; --i) {
            sb.append("-----------\n").append("Frame " + i + ":\n");
            sb.append(memory.get(i));
            sb.append("-----------\n");
        }
        return sb.toString();
    }

    private Frame get_correct_frame(MutableString name, Memory_Element_Type ref_type, Memory_Element_Type desired_type) {
        int frame_number = memory.size() - 1;
        Frame correct_frame = memory.get(frame_number);
        while(correct_frame.get_type(name.str) == ref_type) {
            --frame_number;
            if(frame_number < 0) {
                throw new RuntimeException("Unable to resolve reference " + name.str + "!");
            }
            name.str = correct_frame.get_ref_name(name.str);
            correct_frame = memory.get(frame_number);
        }
        if(correct_frame.get_type(name.str) != desired_type && correct_frame.get_type(name.str) != Memory_Element_Type.undefined) {
            throw new RuntimeException("Type mismatch for " + name.str + "!");
        }
        return correct_frame;
    }

    private class MutableString {
        public String str;
        public MutableString(String s) {
            str = s;
        }
    }
}
