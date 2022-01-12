import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorComponent } from './actor/actor.component';
import { GenersComponent } from './geners/geners.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MovieComponent } from './movie/movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AuthorizedlayoutComponent } from './authorizedlayout/authorizedlayout.component';
import { GuestlayoutComponent } from './guestlayout/guestlayout.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {
    path: '', component: AuthorizedlayoutComponent, children: [
      { path: 'actor', component: ActorComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'watchlist', component: WatchlistComponent },
      { path: 'genres', component: GenersComponent },
      {path:'moviedetails',component:MoviedetailsComponent}
    ]
  },
  {
    path: '', component: GuestlayoutComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
