import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Client } from '../../models/Client';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
    .then(res => {
      this.flashMessage.show('You are registered and logged in', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.flashMessage.show(err.message, {
        cssClass: 'alert-danger', timeout: 4000
      });
    });
  }
}
