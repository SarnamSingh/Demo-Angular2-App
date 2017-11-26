import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './app.route';
import { AppComponent } from './app.component';
import {UserModule} from './UserModule/user.module';
import {NotFound} from './notFound.component'



@NgModule({
    imports : [BrowserModule, FormsModule, routing, UserModule.forRoot()],
    declarations : [AppComponent, NotFound],
    bootstrap : [AppComponent]
})
export class AppModule{

}