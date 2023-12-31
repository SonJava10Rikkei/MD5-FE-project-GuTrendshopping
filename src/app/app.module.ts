import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserNavbarComponent} from './compoment/layout/user/user-navbar/user-navbar.component';
import {UserFooterComponent} from './compoment/layout/user/user-footer/user-footer.component';
import {UserHomeComponent} from './compoment/pages/user/user-home/user-home.component';
import {CustomBtnComponent} from './compoment/customs/custom-btn/custom-btn.component';
import {RegisterComponent} from './compoment/pages/form-login/register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './compoment/pages/form-login/login/login.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.development";
import {UploadAvatarComponent} from './compoment/upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ChildInputComponent} from './compoment/input-output/@input/child-input/child-input.component';
import {DadInputComponent} from './compoment/input-output/@input/dad-input/dad-input.component';
import {ChildOutputComponent} from './compoment/input-output/@output/child-output/child-output.component';
import {DadOutputComponent} from './compoment/input-output/@output/dad-output/dad-output.component';
import {ChangeAvatarComponent} from './compoment/pages/form-login/change-avatar/change-avatar.component';
import {AuthInterceptor} from "./service/auth.interceptor";
import {ListCategoryComponent} from './compoment/contents/category/list-category/list-category.component';
import {CreateCategoryComponent} from './compoment/contents/category/create-category/create-category.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {UpdateCategoryComponent} from './compoment/contents/category/update-category/update-category.component';
import {DeleteCategoryComponent} from './compoment/contents/category/delete-category/delete-category.component';
import {PageCategoryComponent} from './compoment/contents/category/page-category/page-category.component';
import {UserIndexComponent} from './compoment/pages/user/user-index/user-index.component';
import {AdminHomeComponent} from './compoment/pages/admin/admin-home/admin-home.component';
import {AdminIndexComponent} from './compoment/pages/admin/admin-index/admin-index.component';
import {AdminNavbarComponent} from './compoment/layout/admin/admin-navbar/admin-navbar.component';
import {AdminFooterComponent} from './compoment/layout/admin/admin-footer/admin-footer.component';
import {UploadFileComponent} from './compoment/upload/upload-file/upload-file.component';
import {ErrorComponent} from './compoment/pages/error/error.component';
import {ProfileComponent} from './compoment/pages/profile/profile.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ListProductComponent} from './compoment/contents/Product/list-product/list-product.component';
import {CreateProductComponent} from './compoment/contents/Product/create-product/create-product.component';
import {MatSelectModule} from "@angular/material/select";
import {DeleteProductComponent} from './compoment/contents/Product/delete-product/delete-product.component';
import {PageProductComponent} from './compoment/contents/Product/page-product/page-product.component';
import {UpdateProductComponent} from './compoment/contents/Product/update-product/update-product.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NotifierComponent } from './compoment/notifier/notifier.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { ListSizecolumnComponent } from './compoment/contents/sizecolumn/list-sizecolumn/list-sizecolumn.component';
import { CreateSizecolumnComponent } from './compoment/contents/sizecolumn/create-sizecolumn/create-sizecolumn.component';
import { UpdateSizecolumnComponent } from './compoment/contents/sizecolumn/update-sizecolumn/update-sizecolumn.component';
import { DeleteSizecolumnComponent } from './compoment/contents/sizecolumn/delete-sizecolumn/delete-sizecolumn.component';
import {CheckLoginGuard} from "./service/CheckLoginGuard";
import {CheckRoll} from "./service/CheckRoll";
import { ListUserComponent } from './compoment/contents/UserManage/list-user/list-user.component';
import {CdkTableModule} from "@angular/cdk/table";
import { ChangeRoleComponent } from './compoment/contents/UserManage/change-role/change-role.component';
import { BanUserComponent } from './compoment/contents/UserManage/ban-user/ban-user.component';




@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    UserFooterComponent,
    UserHomeComponent,
    CustomBtnComponent,
    RegisterComponent,
    LoginComponent,
    UploadAvatarComponent,
    ChildInputComponent,
    DadInputComponent,
    ChildOutputComponent,
    DadOutputComponent,
    ChangeAvatarComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    PageCategoryComponent,
    UserIndexComponent,
    AdminHomeComponent,
    AdminIndexComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    UploadFileComponent,
    ErrorComponent,
    ProfileComponent,
    ListProductComponent,
    CreateProductComponent,
    DeleteProductComponent,
    PageProductComponent,
    UpdateProductComponent,
    NotifierComponent,
    ListSizecolumnComponent,
    CreateSizecolumnComponent,
    UpdateSizecolumnComponent,
    DeleteSizecolumnComponent,
    ListUserComponent,
    ChangeRoleComponent,
    BanUserComponent,

  ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDialogModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSelectModule,
        ToastrModule.forRoot({
            positionClass: "toast-bottom-right",
            timeOut: 3000,
            easing: 'ease-in',
            easeTime: 400,
        }),
        MatTooltipModule,
        CdkTableModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    CheckLoginGuard,
    CheckRoll
  ],
  bootstrap: [AppComponent],


})
export class AppModule {
}
