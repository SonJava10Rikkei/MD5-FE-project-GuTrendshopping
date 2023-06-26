import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {TokenService} from "../../../../service/token.service";
import {Router} from "@angular/router";
import {SignInForm} from "../../../../model/SignInForm";
import {NotifierService} from "../../../../service/notifier.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: any = {};
  signInForm?: SignInForm;
  status = 'Please fill in the form to login!';
  statusError = 'Welcome to GuTrend !';

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private toast: NotifierService,
              private router: Router) {
  }

  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    this.authService.signIn(this.signInForm).subscribe(data => {
      // @ts-ignore
      if (data.status == 202) {
        this.toast.ShowErrorToastr('Please check your account !', 'Login failed :')
      } // @ts-ignore
      if (data.status == 401) {
        this.toast.ShowErrorToastr('You do not have access !', 'Login failed :')
      } else {
        // @ts-ignore
        this.tokenService.setName(data.name);
        // @ts-ignore
        this.tokenService.setAvatar(data.avatar);
        // @ts-ignore
        this.tokenService.setToken(data.token);
        // @ts-ignore
        this.tokenService.setRole(data.roles);
        this.toast.ShowSuccessToastr('Success !', 'Login :')
        this.authService.setRegister(true);
        this.router.navigate(['']).then(() => {
          window.location.reload();
        })
      }
    })
  }

  ngOnInit(): void {
    // if(this.authService.getRigister()){
    // this.toast.ShowSuccessToastr('Success !','Rigister :')
    // }


  }
}
