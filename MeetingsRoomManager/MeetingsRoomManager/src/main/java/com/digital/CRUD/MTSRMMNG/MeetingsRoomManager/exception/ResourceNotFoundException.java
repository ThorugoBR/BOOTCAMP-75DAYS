package com.digital.CRUD.MTSRMMNG.MeetingsRoomManager.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import sun.swing.StringUIClientPropertyKey;


@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends Exception {
    private static final Long serialVersionUID=1L;
    public ResourceNotFoundException(String message){
        super(message);
    }
}
