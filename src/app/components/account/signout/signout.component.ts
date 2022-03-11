import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppComponent } from 'src/app/app.component';

import { AccountService } from '../../../services/account/account.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private appComponent: AppComponent, private accountService: AccountService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  signout(): void  {
    this.accountService.logOut().subscribe(data => {
      // console.log('SignoutComponent: ' + data.detail);
      this.appComponent.logOut();
    });
  }

}
