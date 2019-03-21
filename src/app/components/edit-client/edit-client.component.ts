import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  id: string;
  disableBalanceOnEdit: boolean;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {

    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;

    // Get Id from URL
    this.id = this.route.snapshot.params[`id`];
    // Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
  }

  onSubmit({value, valid}: { value: Client, valid: boolean}) {

    if (!valid) {
      // Error Flash Message
      this.flashMessage.show('Please fill the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });

    } else {
      // Add Client
      value.id = this.id;
      this.clientService.updateClient(value);
      // Success Flash  Message
      this.flashMessage.show('User Added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to Dashboard
      this.router.navigate(['/']);
    }
  }
}
