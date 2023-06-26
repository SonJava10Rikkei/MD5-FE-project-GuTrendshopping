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
import {ErrorComponent} from "./compoment/pages/error/error.component";
import {ProfileComponent} from "./compoment/pages/profile/profile.component";
import {ListProductComponent} from "./compoment/contents/Product/list-product/list-product.component";
import {NotifierComponent} from "./compoment/notifier/notifier.component";
import {CheckLoginGuard} from "./service/CheckLoginGuard";
import {CheckRoll} from "./service/CheckRoll";
import {ListUserComponent} from "./compoment/contents/UserManage/list-user/list-user.component";


const routes: Routes = [
  {
    path: '', component: UserIndexComponent, children: [
      {path: '', component: UserHomeComponent},
      {path: 'register', component: RegisterComponent, canActivate:[CheckLoginGuard]},
      {path: 'login', component: LoginComponent, canActivate:[CheckLoginGuard]},
      {path: 'input', component: DadInputComponent},
      {path: 'output', component: DadOutputComponent},
      {path: 'change-avatar', component: ChangeAvatarComponent},
      {path: 'error-404', component: ErrorComponent},
      {path: 'profile', component: ProfileComponent},

    ]
  },

  {
    path: 'admin', component: AdminIndexComponent, canActivate:[CheckRoll],children: [
      {path: '', component: AdminHomeComponent, canActivate:[CheckRoll]},
      {path: 'list-category', component: ListCategoryComponent, canActivate:[CheckRoll]},
      {path: 'input', component: DadInputComponent, canActivate:[CheckRoll]},
      {path: 'output', component: DadOutputComponent, canActivate:[CheckRoll]},
      {path: 'change-avatar', component: ChangeAvatarComponent, canActivate:[CheckRoll]},
      {path: 'error-404', component: ErrorComponent, canActivate:[CheckRoll]},
      {path: 'profile', component: ProfileComponent, canActivate:[CheckRoll]},
      {path: 'notifier', component: NotifierComponent, canActivate:[CheckRoll]},
      {path: 'list-product', component: ListProductComponent, canActivate:[CheckRoll]},
      {path: 'list-user', component: ListUserComponent, canActivate:[CheckRoll]},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
