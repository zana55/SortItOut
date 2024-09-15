package com.example.application.views.parser;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Memory {
    private HashMap<String, Integer> memory_int;
    private HashMap<String, ArrayList<Integer>> memory_list;

    public Memory() {
        memory_int = new HashMap<>();
        memory_list = new HashMap<>();
    }

    public void add(String key, Integer value) {
        if(memory_list.containsKey(key)) {
            throw new IllegalArgumentException(key + " was previously defined as an array!");
        }
        memory_int.put(key, value);
    }

    public void add(String key, ArrayList<Integer> value) {
        if(memory_int.containsKey(key)) {
            throw new IllegalArgumentException(key + " was previously defined as an integer!");
        }
        memory_list.put(key, value);
    }

    public void add(String key, Integer index, Integer value) {
        if(memory_list.get(key).size() <= index) {
            throw new ArrayIndexOutOfBoundsException("Attempting to access index " + index.toString() +
                    " of array " + key + " of size " + memory_list.get(key).size());
        }
        memory_list.get(key).set(index, value);
    }

    public void remove(String key) {
        if(memory_int.containsKey(key)) {
            memory_int.remove(key);
        }
        else if(memory_list.containsKey(key)){
            memory_list.remove(key);
        }
    }

    public Integer get(String key) {
        if(!memory_int.containsKey(key)) {
            throw new IllegalArgumentException("Variable " + key + " was not defined!");
        }
        return memory_int.get(key);
    }

    public Integer get(String key, Integer index) {
        if(!memory_list.containsKey(key)) {
            throw new IllegalArgumentException("Array " + key + " was not defined!");
        }
        else if(memory_list.get(key).size() <= index) {
            throw new ArrayIndexOutOfBoundsException("Attempting to access index " + index.toString() +
                    " of array " + key + " of size " + memory_list.get(key).size());
        }
        return memory_list.get(key).get(index);
    }

    public ArrayList<Integer> get_data()
    {
        if(!memory_list.containsKey("data"))
        {
            throw new IllegalArgumentException("Main data array was not inserted into Memory!");
        }
        return memory_list.get("data");
    }

    public Integer get_size(String key) {
        if(!memory_list.containsKey(key)) {
            throw new IllegalArgumentException("Cannot call size(" + key + "), " + key + " is not an array!");
        }
        return memory_list.get(key).size();
    }

    public Memory copy() {
        Memory newMemory = new Memory();

        for (Map.Entry<String, Integer> entry : memory_int.entrySet()) {
            newMemory.memory_int.put(entry.getKey(), entry.getValue());
        }

        for (Map.Entry<String, ArrayList<Integer>> entry : memory_list.entrySet()) {
            if(entry.getKey() == "data") {
                // data should be shallow copied
                newMemory.memory_list.put(entry.getKey(), entry.getValue());
            }
            else {
                ArrayList<Integer> newList = new ArrayList<>(entry.getValue());
                newMemory.memory_list.put(entry.getKey(), newList);
            }
        }

        return newMemory;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Memory:\n");

        // Add the integer values from memory_int
        sb.append("Integer Values:\n");
        for (Map.Entry<String, Integer> entry : memory_int.entrySet()) {
            sb.append(entry.getKey()).append(" = ").append(entry.getValue()).append("\n");
        }

        // Add the list values from memory_list
        sb.append("List Values:\n");
        for (Map.Entry<String, ArrayList<Integer>> entry : memory_list.entrySet()) {
            sb.append(entry.getKey()).append(" = ").append(entry.getValue().toString()).append("\n");
        }

        return sb.toString();
    }
}
