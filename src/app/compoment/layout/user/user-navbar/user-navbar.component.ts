import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../../service/token.service";
import {adminSidebar} from "../../../customs/js/admin-sidebar";
import {userNarbar} from "../../../customs/js/userNarbar";

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
  checkUserAdminPm = false;
  name = '';
  avatar = '';
  checkLogin = false;

  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    userNarbar()
    if(JSON.stringify(this.tokenService.getRole())==JSON.stringify(['ADMIN']) || JSON.stringify(this.tokenService.getRole())==JSON.stringify(['PM'])      ){
      this.checkUserAdminPm = true;

    }
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
    };

  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }

}
