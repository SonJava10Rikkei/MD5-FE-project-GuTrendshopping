import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./compoment/pages/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: HomeComponent},
  {path: 'login', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
