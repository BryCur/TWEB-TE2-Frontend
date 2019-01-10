import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule, MatCardModule,
  MatIconModule, MatInputModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// applications components
import { LoginPageComponent } from './login-page/login-page.component';
import { PopularPageComponent } from './popular-page/popular-page.component';
import { UpcommingPageComponent } from './upcomming-page/upcomming-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PopularPageComponent,
    UpcommingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
