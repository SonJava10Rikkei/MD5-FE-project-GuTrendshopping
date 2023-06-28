import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/JwtResponse";
import {SignInForm} from "../model/SignInForm";
import {ChangeAvatar} from "../model/ChangeAvatar";
import {Profile} from "../model/profile";
import {UserManage} from "../model/UserManage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API LOCAL
  private API_AUTHCONTROLLER = environment.API_LOCAL;
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';
  private API_UPDATE_AVATAR = environment.API_LOCAL + 'change-avatar'
  private API_UPDATE_PROFILE = environment.API_LOCAL + 'update-user'
  private API_GET_LIST_USER = environment.API_LOCAL + 'list-user'
  private API_USER_DETAIL_BY_ID = environment.API_LOCAL + 'detail-user'
  private API_CHANGE_ROLES_USER = environment.API_LOCAL + 'change-role'


  //API SERVER
  // private API_SIGNUP = environment.API_SERVER+'signup';
  // private API_SIGNIN = environment.API_SERVER+'signin';
  // private API_UPDATE_AVATAR = environment.API_SERVER + 'change-avatar';
  constructor(private httpClient: HttpClient,
  ) {
  }

  getListUser(userManage: UserManage): Observable<any> {
    // @ts-ignore
    return this.httpClient.get<any>(this.API_GET_LIST_USER, userManage);
  }

  getUserDetailByIdService(id: number) {
    return this.httpClient.get(this.API_USER_DETAIL_BY_ID + '/' + id);
  }


  signUp(signUpForm: SignUpForm): Observable<any> {
    // console.log('goi service --->', signUpForm)
    return this.httpClient.post<any>(this.API_SIGNUP, signUpForm);
  }

  signIn(signInForm: SignInForm): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(this.API_SIGNIN, signInForm);
  }

  editAvatar(changeAvatar: ChangeAvatar): Observable<any> {
    return this.httpClient.put<any>(this.API_UPDATE_AVATAR, changeAvatar);
  }

  putChangeRoleUserService(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.put<any>(this.API_AUTHCONTROLLER + 'change-role/' + id);
  }

  putBlockUser(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.put<any>(this.API_AUTHCONTROLLER + 'block-user/' + id)
  }

  updateProfile(profile: Profile): Observable<any> {
    return this.httpClient.put<any>(this.API_UPDATE_PROFILE, profile)
  }

  checkRegister = false;

  setRegister(status: boolean) {
    this.checkRegister = status;

  }

  getRigister(): boolean {
    return this.checkRegister;
  }

}
