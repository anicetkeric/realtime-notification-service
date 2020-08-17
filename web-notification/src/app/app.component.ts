import { Component, OnInit } from '@angular/core';
import { PushNotificationsService } from 'ng-push-ivy';
import { NotificationService } from './notification.service';
import { WebSocketConfig } from './websocket-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  webSocket: WebSocketConfig;
  greeting: any;
  name: string;



  title = 'Web push Notifications!';
  /* constructor( private pushNotifications: PushNotificationsService, private notificationService: NotificationService ) {
    this.pushNotifications.requestPermission();
  } */

  ngOnInit() {
    this.webSocket = new WebSocketConfig();
    this.connect();
  }
  connect(){
    this.webSocket._connect();
  }

  disconnect(){
    this.webSocket._disconnect();
  }

  sendMessage(){
    this.webSocket._send(this.name);
  }

  handleMessage(message){
    this.greeting = message;
    console.log('receivemessage component', message);
  }
/* 
  notify(): void{
    const options = {
      body: 'This is your notification!',
      icon: 'assets/notification-bell-icon.png'
    };
    this.pushNotifications.create('New Alerte', options).subscribe(
        res => console.log(res),
        err => console.log(err)
    );
  } */
}
