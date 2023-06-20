import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../../service/token.service";

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
  name = '';
  avatar = '';
  checkLogin = false;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
    }
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }
}
