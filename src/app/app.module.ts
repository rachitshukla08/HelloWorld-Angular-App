//app.module.ts - Indicates this is a typescript file. Essentially provides strong type checking

//importing core modules from angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Using Ngmodule decorator we provide additional metadata to specify the components,services,imports
@NgModule({

  //Components are added here.Essentially the classes that has views
  declarations: [
    AppComponent
  ],

  //Various imports needed for application
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  //To provide services like http services, they are added to providers
  providers: [],

  //The root component which is the main view of the application. Only the root module has this property and indicates the component
  //which is going to be bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
