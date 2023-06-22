import {Component, OnInit} from '@angular/core';
import {adminSidebar} from "../../../customs/js/admin-sidebar";

@Component({
  selector: 'app-user-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit{
  ngOnInit(): void {
    adminSidebar()
  }

}

