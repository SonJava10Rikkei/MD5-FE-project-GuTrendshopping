import {Component} from '@angular/core';
import {ChangeAvatar} from "../../../../model/ChangeAvatar";
import {AuthService} from "../../../../service/auth.service";
import {TokenService} from "../../../../service/token.service";

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.scss']
})
export class ChangeAvatarComponent {
  form: any = {};
  changeAvatar?: ChangeAvatar;

  constructor(private authService: AuthService,
              private tokenService: TokenService) {
  }

  updateAvatar() {
    this.changeAvatar = new ChangeAvatar(
      this.form.avatar
    )
    this.authService.editAvatar(this.changeAvatar).subscribe(data => {

      this.tokenService.setAvatar(this.form.avatar);
      window.location.reload();
    })
  }

  onUpload($event: string) {
    this.form.avatar = $event
  }
}
