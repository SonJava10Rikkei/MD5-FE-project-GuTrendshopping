import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/JwtResponse";
import {SignInForm} from "../model/SignInForm";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API LOCAL
private API_SIGNUP = environment.API_LOCAL+'signup';
private API_SIGNIN = environment.API_LOCAL+'signin';
private API_UPDATE_AVATAR = environment.API_LOCAL+'change-avatar'

  //API SERVER
  // private API_SIGNUP = environment.API_SERVER+'signup';
  // private API_SIGNIN = environment.API_SERVER+'signin';
  // private API_UPDATE_AVATAR = environment.API_LOCAL + 'change-avatar';
  constructor(private httpClient: HttpClient) { }
  signUp(signUpForm: SignUpForm): Observable<any>{
    console.log('goi service --->', signUpForm)
    return this.httpClient.post<any>(this.API_SIGNUP, signUpForm);
  }

  signIn(signInForm: SignInForm): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(this.API_SIGNIN, signInForm);
  }
  // editAvatar(changeAvatar: ChangeAvatar): Observable<any>{
  //   return this.httpClient.put<any>(this.API_UPDATE_AVATAR, changeAvatar);
  // }
}
