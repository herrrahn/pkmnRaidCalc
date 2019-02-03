import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RaidsService} from './services/raids.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {ListPokemon} from './list.pokemon';
import {ClarityModule, ClrFormsNextModule} from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule
  ],
  providers: [
//    HttpClient,
//    HttpHandler,
    RaidsService,
    ListPokemon],
  bootstrap: [AppComponent]
})
export class AppModule { }
