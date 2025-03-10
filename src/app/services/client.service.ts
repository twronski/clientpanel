import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,
AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { Client } from '../models/Client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) {
    // 'Clients' matches the name of the collection in Firebase
    this.clientsCollection = this.afs.collection('Clients',
    ref => ref.orderBy('balance', 'desc'));
  }

  getClients(): Observable<Client[]> {
    this.clients = this.clientsCollection.snapshotChanges().
    pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Client;
      const id = a.payload.doc.id;
      return {id, ...data};
    })));

    return this.clients;
  }

  newClient(client: Client) {
    this.clientsCollection.add(client);
  }

  getClient(id: string): Observable<Client> {
    this.clientDoc = this.afs.doc<Client>(`Clients/${id}`);
    this.client = this.clientDoc.snapshotChanges().
    pipe(map(action =>  {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Client;
        data.id = action.payload.id;
        return data;
      }
    }));

    return this.client;
  }

  updateClient(client: Client) {
    this.clientDoc = this.afs.doc(`Clients/${client.id}`);
    this.clientDoc.update(client);
  }

  deleteClient(client: Client) {
    this.clientDoc = this.afs.doc(`Clients/${client.id}`);
    this.clientDoc.delete();
  }

  // getClients(): Observable<Client[]> {
  //   // Get clients with the id
  //   this.clients = this.clientsCollection.snapshotChanges().map(changes => {
  //     return changes.map(action => {
  //       const data = action.payload.doc.data() as Client;
  //       data.id = action.payload.doc.id;
  //       return data;
  //     });
  //   });

  //   return this.clients;
  // }
}
