import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import   { NotFound} from './notFound.component';

const routes:Routes=
[
    { path:'' , redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component: AppComponent},
    { path: '**', component:NotFound }
];
export const routing=RouterModule.forRoot(routes);
