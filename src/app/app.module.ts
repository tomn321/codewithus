import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent } from './customer-list.component';
import { AddressComponent } from './address.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)  ], 
  declarations: [ AppComponent, AddressComponent, CustomerListComponent, CustomerDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ DataService, LoggerService]
})
export class AppModule { }
