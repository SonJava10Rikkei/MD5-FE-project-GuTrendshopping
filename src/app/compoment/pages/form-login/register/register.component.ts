import {Component} from '@angular/core';
import {SignUpForm} from "../../../../model/SignUpForm";
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";
import {NotifierService} from "../../../../service/notifier.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  status = 'Please fill in the form to register';
  statusError: string = '';
  form: any = {};
  signUpForm?: SignUpForm;
  emailFormValidate = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  hide = true;

  constructor(private authService: AuthService,
              private notifier:NotifierService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    )
    this.authService.signUp(this.signUpForm).subscribe(data => {
      if (data.message == 'no_user') {
        this.notifier.ShowErrorToastr('The username is existed! Please try again!','Register username:')
      } else if (data.message == 'no_email') {
        this.notifier.ShowErrorToastr('The email is existed! Please try again!','Register email:')

      } else if (data.message == 'yes') {
        this.status = "Create account success!"
        this.notifier.ShowSuccessToastr('Hello !!!','Register success:')
        this.router.navigate(['/login'])
      }
    })
  }
}
