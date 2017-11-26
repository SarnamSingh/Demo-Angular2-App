import {Component} from '@angular/core';
import {User} from './user.model';
import {UserHelper} from './user.common';

@Component({
selector:'user-login',
templateUrl:'./userLogin.component.html'
})
export class UserLogin{
    user:User;
    status:string;

    constructor(){
        this.user=new User();
        status='';
    }

    onLogin():void{

    }
    onClear(): void{
        UserHelper.onClear();
        status='';
    }
    onSignUp():void{

    }
    onForgetPassword():void{

    }

}