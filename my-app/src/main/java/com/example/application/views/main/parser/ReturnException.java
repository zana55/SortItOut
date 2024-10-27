package com.example.application.views.main.parser;

@SuppressWarnings("serial")
public class ReturnException extends RuntimeException  {
    private Integer ret_value;

    public ReturnException(Integer value) {
        super();
        ret_value = value;
    }

    public Integer get_value() {
        return ret_value;
    }
}
