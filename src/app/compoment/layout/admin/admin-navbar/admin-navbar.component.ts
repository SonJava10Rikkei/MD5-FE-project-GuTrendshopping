import {Component, OnInit} from '@angular/core';
import {adminSidebar} from "../../../customs/js/admin-sidebar";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit{
  ngOnInit(): void {

    adminSidebar()
  }

}

