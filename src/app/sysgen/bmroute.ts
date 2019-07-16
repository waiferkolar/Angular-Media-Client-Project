import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DetailComponent} from '../detail/detail.component';
import {AuthComponent} from '../auth/auth.component';
import {LoginComponent} from '../auth/login/login.component';
import {RegisterComponent} from '../auth/register/register.component';

const BMROUTE: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail/:id', component: DetailComponent},
  {
    path: 'auth', component: AuthComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

export const BM_ROUTE = RouterModule.forRoot(BMROUTE);
