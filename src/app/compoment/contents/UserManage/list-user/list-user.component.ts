import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from "../../../../model/Category";
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../../../service/token.service";
import {NotifierService} from "../../../../service/notifier.service";
import {MatTableDataSource} from "@angular/material/table";
import {DeleteCategoryComponent} from "../../category/delete-category/delete-category.component";
import {MatPaginator} from "@angular/material/paginator";
import {UserManage} from "../../../../model/UserManage";
import {AuthService} from "../../../../service/auth.service";
import {ChangeRoleComponent} from "../change-role/change-role.component";
import {BanUserComponent} from "../ban-user/ban-user.component";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  checkUserLogin = false;
  checkUserAdmin = false;
  status: string = "";
  listUser: UserManage[] = [];
  displayedColumns: string[] = ['position', 'name', 'avatar', 'email', 'role','status', 'ban', 'change'];
  dataSource: any;

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private authService: AuthService,
              private toast: NotifierService
  ) {
  }


  openDialogChangeRoles(id: any) {
    const dialogRef = this.dialog.open(ChangeRoleComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.authService.putChangeRoleUserService(id).subscribe(data => {

          if (data.message == "can't_change_admin_role") {
            this.toast.ShowErrorToastr('Can\'t change admin role !!!', 'Change Roles :')
          } else {
            this.toast.ShowSuccessToastr('Success', 'Change Roles :')
            // @ts-ignore
            this.authService.getListUser().subscribe(data => {
              this.listUser = data;
              this.dataSource = new MatTableDataSource<UserManage>(this.listUser);
              this.dataSource.paginator = this.paginator;
            })
          }
        })
      }
    });
  }

  openDialogBanUser(id: any) {
    const dialogRef = this.dialog.open(BanUserComponent, {
      data: {
        dataKey: id
      }
    });
    // console.log('id --------------> ', id)
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.authService.putBlockUser(id).subscribe(data => {
          if (data.message == "access_is_denied") {
            this.toast.ShowWarningToastr('Can\'t ban admin', 'Block user :')
          } else {
            this.toast.ShowSuccessToastr('Success', 'Block user :')
            // @ts-ignore
            this.authService.getListUser().subscribe(data => {
              this.listUser = data;
              this.dataSource = new MatTableDataSource<UserManage>(this.listUser);
              this.dataSource.paginator = this.paginator;
            })
          }
        })
      }
    });
  }

  // phan trang
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnInit(): void {
    if (JSON.stringify(this.tokenService.getRole()) == JSON.stringify(['ADMIN'])) {
      this.checkUserAdmin = true;
    }
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    // @ts-ignore
    this.authService.getListUser().subscribe(data => {
      this.listUser = data;
      this.dataSource = new MatTableDataSource<UserManage>(this.listUser);
      this.dataSource.paginator = this.paginator;
    })

  }

  protected readonly name = name;
}
