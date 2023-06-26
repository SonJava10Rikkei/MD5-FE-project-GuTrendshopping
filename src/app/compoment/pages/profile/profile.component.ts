import {Component, OnInit} from '@angular/core';
import {ChangeAvatar} from "../../../model/ChangeAvatar";
import {AuthService} from "../../../service/auth.service";
import {TokenService} from "../../../service/token.service";
import {NotifierService} from "../../../service/notifier.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  name = '';
  avatar = '';
  form: any = {};
  changeAvatar?: ChangeAvatar;
  status = 'Update Your Avatar!'
  checkLogin = false;


  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private toast:NotifierService,
              ) {
  }
  updateAvatar() {
    this.changeAvatar = new ChangeAvatar(
      this.form.avatar
    )
    this.authService.editAvatar(this.changeAvatar).subscribe(data =>{
      // console.log('data -->',data)
      if(data.message == 'no'){
        this.status = 'Update Failed! Please choose upload file!'
      } else {
        this.tokenService.setAvatar(this.form.avatar);
        window.location.reload();
      }
    })
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
    }
  }

}
