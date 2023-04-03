import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { APLogoComponent } from './components/ap-logo/ap-logo.component';
import { SocialComponent } from './components/social/social.component';
import { BannersComponent } from './components/banners/banners.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    APLogoComponent,
    SocialComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
