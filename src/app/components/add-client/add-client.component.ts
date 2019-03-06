import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd = true;
  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessages: FlashMessagesService,
    private clientService: ClientService,
    private router: Router)
    { }

  ngOnInit() {
  }

  onSubmit({value, valid}: { value: Client, valid: boolean}) {
      if (this.disableBalanceOnAdd) {
        value.balance = 0;
      }
      if (!valid) {
        // Error Flash Message
        this.flashMessages.show('Please fill the form correctly', {
          cssClass: 'alert-danger', timeout: 4000
        });

      } else {
        //Add Client
        this.clientService.newClient(value);
        //Success Flash  Message 
        this.flashMessages.show('User Added', {
          cssClass: 'alert-success', timeout: 4000
        });
        //Redirect to Dashboard
        this.router.navigate(['/']);
      }
  }
}
