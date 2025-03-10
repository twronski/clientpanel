# Clientpanel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Project Description

This is a sample app to manage clients using Angular 6 as front end and Firebase as back end.

## Steps to Create the Project

+ `ng new clientpanel`
+ Install dependencies: bootstrap, font-awesome
  + `npm install bootstrap@4.0.0-beta.2 jquery popper.js font-awesome --save`
  + Include dependencies in style and script sections of angular.json
+ Generate application components
  + `ng g c components/navbar --spec=false`
  + `ng g c components/dashboard --spec=false`
  + `ng g c components/clients --spec=false`
  + `ng g c components/client-details --spec=false`
  + `ng g c components/add-client --spec=false`
  + `ng g c components/edit-client --spec=false`
  + `ng g c components/login --spec=false`
  + `ng g c components/register --spec=false`
  + `ng g c components/sidebar --spec=false`
  + `ng g c components/settings --spec=false`
  + `ng g c components/not-found --spec=false`
+ Setup the navbar component with basic navigation
+ Create the routing module and routes
  + `ng g m app-routing --flat --module=app --spec=false`
  + Import all components in the app-routing file
  + Create the routes
  + Edit navbar with the created routes / routerLink="xxx"
  + Include `<router-outlet> </router-outlet>` tag in the app.component.html file
+ AngularFire2 Installation and Setup
  + `npm install @angular/fire firebase --save`
  + Copy project configuration (from firebase console, project overview) in environment.ts and environment.prod.ts files.
  + Import Modules in the app.module.ts file.
  + Generate client Service `ng g s serices/client --module=app --spec=false`
  + Bring in Services Dependencies from AngularFire2 and also Observables.
  + [Write Service function according to AngularFire2 documemtation](https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md)
  + [Solve the issue related to Firestore Settings in version 5.8.0](https://github.com/angular/angularfire2/issues/1993)
  + Create the clients html page - table with balance and totalOwned.
  + Create the add-client Form using template driven Form
  + Template Driven Form use the @ViewChild decorator: `@ViewChild(<name_of_the_form_in_html_file>)`
  + Implement the onSubmit Form function
  + [Add Angular2-Flash-Messages npm module](https://www.npmjs.com/package/angular2-flash-messages)
  + Implement Flash Messages
  + Create Service to add new Client in Firebase:
    `newClient(client: Client){
     this.clientsCollection.add(client);
     }`
  + Create service `getClient(id) function` to collect one document in firebase;
  + Implement the details view.
  + Implement the update balance form
  + Update the edit and delete functionalities
  + [Implement Authorization using `AngularFireAuth`](https://angularfirebase.com/snippets/angularfire2-version-4-authentication-service/)
  + [Good Documentation and Snippets about Authorization](https://angularfirebase.com/snippets/angularfire2-version-4-authentication-service/)
  + Create Guards to access management. Included the AuthGuard Service and Inject it in app.routing
  + Settings services and Register Guard
  + Add the settings component
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
