# Clientpanel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Project Description

This is a sample app to manage clients using Angular 6 as front end and Firebase as back end.

## Steps to Create the Project

+ ng new clientpanel
+ Install dependencies: bootstrap, font-awesome
  + npm install bootstrap@4.0.0-beta.2 jquery popper.js font-awesome --save
  + Include dependencies in style and script sections of angular.json
+ Generate application components
  + ng g c components/navbar --spec=false
  + ng g c components/dashboard --spec=false
  + ng g c components/clients --spec=false
  + ng g c components/client-details --spec=false
  + ng g c components/add-client --spec=false
  + ng g c components/edit-client --spec=false
  + ng g c components/login --spec=false
  + ng g c components/register --spec=false
  + ng g c components/sidebar --spec=false
  + ng g c components/settings --spec=false
  + ng g c components/not-found --spec=false
+ Setup the navbar component with basic navigation

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
