import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
	
	messages = [
	{
		user: 'admin',
		createdAt: 1554090856000,
		msg: 'Selamat Datang ! Apakah ada yang bisa kami bantu ?'
	},
	{
		user: 'user',
		createdAt: 1554090956000,
		msg: 'Bagaimana cara untuk mengirimkan saran dan kritik kepada pemerintah desa ?'
	},
	{
		user: 'admin',
		createdAt: 1554090856000,
		msg: 'Silahkan menuju pada tab kirim kritik untuk mengirimkan saran secara langsung kepada pemerintah desa'
	}
	];
	
	currentUser = 'admin';
	newMsg = '';
	@ViewChild(IonContent) content: IonContent;

  constructor() { }

  sendMessage(){
  this.messages.push({
  user: 'user',
  createdAt: new Date().getTime(),
  msg: this.newMsg
  });

  this.newMsg = '';
  
	setTimeout(() => {
	this.content.scrollToBottom(200);
	
	});
	}
}
