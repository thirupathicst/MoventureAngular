import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorComponent } from './actor/actor.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { SignupComponent } from './signup/signup.component';
import { GenersComponent } from './geners/geners.component';
import { HeaderlayoutComponent } from './headerlayout/headerlayout.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { GuestlayoutComponent } from './guestlayout/guestlayout.component';
import { AuthorizedlayoutComponent } from './authorizedlayout/authorizedlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    LoginComponent,
    MovieComponent,
    SignupComponent,
    GenersComponent,
    HeaderlayoutComponent,
    WatchlistComponent,
    GuestlayoutComponent,
    AuthorizedlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
