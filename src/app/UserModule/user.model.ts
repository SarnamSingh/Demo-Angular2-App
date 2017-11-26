export class User
{
    FirstName : string;
    LastName : string;
    EmailId : string;
    ContractNumber : string;
    UserId : string;
    Password : string
    ConfirmPassword : string;

    constructor(){
        this.FirstName = '';
        this.LastName = '';
        this.EmailId = '';
        this.ContractNumber = '';
        this.UserId='';
        this.Password='';
        this.ConfirmPassword='';
    }
}