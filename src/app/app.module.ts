import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {BM_ROUTE} from './sysgen/bmroute';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {LocalService} from './sysgen/localservice';
import {DetailComponent} from './detail/detail.component';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BM_ROUTE
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
