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
import {ListSizecolumnComponent} from "./compoment/contents/sizecolumn/list-sizecolumn/list-sizecolumn.component";

const routes: Routes = [
  {
    path: '', component: UserIndexComponent, children: [
      {path: '', component: UserHomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'input', component: DadInputComponent},
      {path: 'output', component: DadOutputComponent},
      {path: 'change-avatar', component: ChangeAvatarComponent},
      {path: 'error-404', component: ErrorComponent},
      {path: 'profile', component: ProfileComponent},

    ]
  },

  {
    path: 'admin', component: AdminIndexComponent, children: [
      {path: '', component: AdminHomeComponent},
      {path: 'list-category', component: ListCategoryComponent},
      {path: 'input', component: DadInputComponent},
      {path: 'output', component: DadOutputComponent},
      {path: 'change-avatar', component: ChangeAvatarComponent},
      {path: 'error-404', component: ErrorComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'notifier', component: NotifierComponent},
      {path: 'list-product', component: ListProductComponent},
      {path: 'list-size', component: ListSizecolumnComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
