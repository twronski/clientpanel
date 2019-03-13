import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable} from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  login(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData) , err => reject(err))}
    );
  }
  getAuth() {
    return this.fireAuth.authState.pipe(auth => auth);
  }

  logout(){
    this.fireAuth.auth.signOut();
  }
}

