import {Component} from '@angular/core';
import {User} from './user.model';
import {UserHelper} from './user.common';

@Component({
selector:'user-registration',
templateUrl: './userRegistration.component.html'
})
export class UserRegistration {
    user:User;
    status:string;
    constructor(){
        this.user=new User();
        status='';
    }
    onSubmit():void{
         this.status= `Values (${this.user.FirstName},${this.user.LastName}) submitted successfully.`;
    }
    onClear():void{
        UserHelper.onClear();
         status='';
    }

}