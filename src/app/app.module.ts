import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import 'hammerjs';

import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {PaymentService} from './services/payment.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    routing,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    LoginService,
    UserService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
