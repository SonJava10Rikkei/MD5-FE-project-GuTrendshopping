import {Component, Inject} from '@angular/core';
import {Category} from "../../../../model/Category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../../service/category.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserManage} from "../../../../model/UserManage";
import {AuthService} from "../../../../service/auth.service";

@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrls: ['./change-role.component.scss']
})
export class ChangeRoleComponent {

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
