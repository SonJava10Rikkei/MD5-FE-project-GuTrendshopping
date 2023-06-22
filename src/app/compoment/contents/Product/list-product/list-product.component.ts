import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../../../service/token.service";
import {CreateCategoryComponent} from "../../category/create-category/create-category.component";
import {CreateProductComponent} from "../create-product/create-product.component";
import {Category} from "../../../../model/Category";
import {DeleteCategoryComponent} from "../../category/delete-category/delete-category.component";
import {MatTableDataSource} from "@angular/material/table";
import {UpdateCategoryComponent} from "../../category/update-category/update-category.component";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  checkUserLogin = false;
  status: string = "";
  listCategory: Category[] = [];
  displayedColumns: string[] = ['position', 'id', 'name', 'avatar', 'edit', 'delete'];
  dataSource: any;

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,

  ) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateProductComponent);
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: {
        dataKey: id
      }
    });


  }
  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: {
        dataKey: id
      }
    });
    // console.log('id --------------> ', id)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {


      }
    });
  }
}
