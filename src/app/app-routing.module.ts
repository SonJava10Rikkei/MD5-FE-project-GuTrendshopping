import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserHomeComponent} from "./compoment/pages/user/user-home/user-home.component";
import {RegisterComponent} from "./compoment/pages/form-login/register/register.component";
import {LoginComponent} from "./compoment/pages/form-login/login/login.component";
import {DadInputComponent} from "./compoment/input-output/@input/dad-input/dad-input.component";
import {DadOutputComponent} from "./compoment/input-output/@output/dad-output/dad-output.component";
import {ChangeAvatarComponent} from "./compoment/pages/form-login/change-avatar/change-avatar.component";
import {ListCategoryComponent} from "./compoment/contents/category/list-category/list-category.component";
import {UserIndexComponent} from "./compoment/pages/user/user-index/user-index.component";
import {AdminHomeComponent} from "./compoment/pages/admin/admin-home/admin-home.component";
import {AdminIndexComponent} from "./compoment/pages/admin/admin-index/admin-index.component";

const routes: Routes = [
  {
    path: '', component: UserIndexComponent, children: [
      {path: '', component: UserHomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'input', component: DadInputComponent},
      {path: 'output', component: DadOutputComponent},
      {path: 'change-avatar', component: ChangeAvatarComponent},
    ]
  },

  {
    path: 'admin', component: AdminIndexComponent, children: [
      {path: '', component: AdminHomeComponent},
      {path: 'category', component: ListCategoryComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'input', component: DadInputComponent},
      {path: 'output', component: DadOutputComponent},
      {path: 'change-avatar', component: ChangeAvatarComponent},
    ]
  }
  // {path: 'update-category/:id', component: UpdateCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
