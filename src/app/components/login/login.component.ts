import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Client } from '../../models/Client';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password).then(
    res => {
      this.flashMessage.show('You are logged in', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);
    }).catch(err => {
      this.flashMessage.show(err.message, {
        cssClass: 'alert-danger', timeout: 4000
      });
    });
  }
}
