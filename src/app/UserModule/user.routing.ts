import { Routes, RouterModule } from "@angular/router";
import {UserLogin} from './userLogin.component';
import {UserRegistration} from './userRegistration.component';

const userRoutes:Routes=[
    { path:'user', 
      children :[
          { path: '', component: UserLogin},
          { path:'registration', component: UserRegistration}
      ]
}
]

export const userRouting= RouterModule.forChild(userRoutes);
