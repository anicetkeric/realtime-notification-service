package com.notification.service.kafkaconsumer.exception;

/**
 * <h2>MapperException</h2
 */
public class MapperException extends RuntimeException {
    public MapperException(String msg, Throwable t) {
        super(msg, t);
    }

    public MapperException(String msg) {
        super(msg);
    }
}
