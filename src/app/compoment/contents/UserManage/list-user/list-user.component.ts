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

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit{
  checkUserLogin = false;
  checkUserAdmin = false;
  status: string = "";
  listUser: UserManage[] = [];
  displayedColumns: string[] = ['position','name', 'avatar','email','role','status','edit', 'delete'];
  dataSource: any;

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private authService: AuthService,
              private toast:NotifierService

  ) {
  }
  openDialogChangeRoles(id: any) {
    const dialogRef = this.dialog.open(ChangeRoleComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.putChangeRoleUserService(id).subscribe(data => {
          // this.status = "Delete Success";
          this.toast.ShowSuccessToastr('Success','Change Roles :')
          // @ts-ignore
          this.authService.getListUser().subscribe(data => {
            this.authService = data;
            this.dataSource = new MatTableDataSource<Category>(this.listUser);
            this.dataSource.paginator = this.paginator;
          })
        })
      }
    });
  }

  openDialogBanUser(id: any) {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: {
        dataKey: id
      }
    });
    // console.log('id --------------> ', id)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.putChangeRoleUserService(id).subscribe(data => {
          // this.status = "Delete Success";
          this.toast.ShowSuccessToastr('Success','Delete Category :')
          // @ts-ignore
          this.authService.getListUser().subscribe(data => {
            this.authService = data;
            this.dataSource = new MatTableDataSource<Category>(this.listUser);
            this.dataSource.paginator = this.paginator;
          })
        })
      }
    });
  }

  // phan trang
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnInit(): void {
    if(JSON.stringify(this.tokenService.getRole())==JSON.stringify(['ADMIN'])){
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

}
