package com.notification.service.kafkaproducer.service;

import com.notification.service.kafkaproducer.model.Notification;

public interface NotificationService {

    /**
     * Send notification
     * @param notification model of notification
     */
    void send(Notification notification);
}
