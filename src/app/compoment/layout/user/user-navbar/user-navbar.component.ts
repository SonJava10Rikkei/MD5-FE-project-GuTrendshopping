import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../../service/token.service";
import {adminSidebar} from "../../../customs/js/admin-sidebar";
import {userNarbar} from "../../../customs/js/userNarbar";

function navbarLinks() {

  document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Preloader
     */
    const preloader: HTMLElement | null = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
     * Sticky header on scroll
     */
    const selectHeader: HTMLElement | null = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('#navbar a');

    function navbarlinksActive() {
      navbarlinks.forEach((navbarlink: HTMLAnchorElement) => {

        if (!navbarlink.hash) return;

        let section: HTMLElement | null = document.querySelector(navbarlink.hash);
        if (!section) return;

        let position: number = window.scrollY + 200;

        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      })
    }

    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);



  });
}


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
    navbarLinks()
    if (JSON.stringify(this.tokenService.getRole()) == JSON.stringify(['ADMIN']) || JSON.stringify(this.tokenService.getRole()) == JSON.stringify(['PM'])) {
      this.checkUserAdminPm = true;

    }
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
    }
    ;

  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }

}
