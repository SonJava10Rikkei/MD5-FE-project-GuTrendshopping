import {Component, Inject, OnInit} from '@angular/core';
import {UserManage} from "../../../../model/UserManage";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../../service/auth.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-ban-user',
  templateUrl: './ban-user.component.html',
  styleUrls: ['./ban-user.component.scss']
})
export class BanUserComponent implements OnInit{
  userManage?: UserManage;

  constructor(private actRouter: ActivatedRoute,
              private authService: AuthService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {

    // console.log("this.data inject", this.data.dataKey)
    this.authService.getUserDetailByIdService(this.data.dataKey).subscribe(data => {
      this.userManage = data;
      // console.log("data delete -----> ", data)
    })
  }

}
