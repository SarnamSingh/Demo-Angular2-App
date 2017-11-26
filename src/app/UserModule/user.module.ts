import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {userRouting} from './user.routing';
import {UserRegistration} from './userRegistration.component';
import {UserLogin} from './userLogin.component';


@NgModule({
   declarations:[ UserLogin, UserRegistration],
   imports: [CommonModule,FormsModule, userRouting],
   exports: [UserLogin]
})
export class UserModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule:UserModule
        }
    }

}