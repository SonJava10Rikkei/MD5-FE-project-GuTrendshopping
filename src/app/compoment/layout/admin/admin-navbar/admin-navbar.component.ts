import {Component, OnInit} from '@angular/core';
import {adminSidebar} from "../../../customs/js/admin-sidebar";
import {TokenService} from "../../../../service/token.service";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit{
  name = '';
  avatar = '';
  checkLogin = false;
  constructor(private tokenService: TokenService) {
  }
  ngOnInit(): void {
    adminSidebar();

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

