
import {User} from './user.model'

export class UserHelper{
static user:User;
   static onClear(): User{
        return new User();
    }
}