import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './compoment/layout/user/navbar/navbar.component';
import { FooterComponent } from './compoment/layout/user/footer/footer.component';
import { HomeComponent } from './compoment/pages/home/home.component';
import { CustomBtnComponent } from './compoment/customs/custom-btn/custom-btn.component';
import { RegisterComponent } from './compoment/pages/form-login/register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './compoment/pages/form-login/login/login.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.development";
import { UploadAvatarComponent } from './compoment/upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ChildInputComponent } from './compoment/input-output/@input/child-input/child-input.component';
import { DadInputComponent } from './compoment/input-output/@input/dad-input/dad-input.component';
import { ChildOutputComponent } from './compoment/input-output/@output/child-output/child-output.component';
import { DadOutputComponent } from './compoment/input-output/@output/dad-output/dad-output.component';
import { ChangeAvatarComponent } from './compoment/pages/form-login/change-avatar/change-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CustomBtnComponent,
    RegisterComponent,
    LoginComponent,
    UploadAvatarComponent,
    ChildInputComponent,
    DadInputComponent,
    ChildOutputComponent,
    DadOutputComponent,
    ChangeAvatarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
