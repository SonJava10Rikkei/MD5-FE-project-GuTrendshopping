import {Component, OnInit, ViewChild} from '@angular/core';
import {NotifierService} from "../../../../service/notifier.service";
import {TokenService} from "../../../../service/token.service";
import {CreateCategoryComponent} from "../../category/create-category/create-category.component";
import {MatTableDataSource} from "@angular/material/table";
import {Category} from "../../../../model/Category";
import {MatDialog} from "@angular/material/dialog";
import {CategoryService} from "../../../../service/category.service";
import {MatPaginator} from "@angular/material/paginator";
import {UpdateCategoryComponent} from "../../category/update-category/update-category.component";
import {DeleteCategoryComponent} from "../../category/delete-category/delete-category.component";
import {CreateSizecolumnComponent} from "../create-sizecolumn/create-sizecolumn.component";
import {SizecolumnService} from "../../../../service/sizecolumn.service";
import {SizeColumn} from "../../../../model/SizeColumn";
import {UpdateSizecolumnComponent} from "../update-sizecolumn/update-sizecolumn.component";
import {DeleteSizecolumnComponent} from "../delete-sizecolumn/delete-sizecolumn.component";

@Component({
  selector: 'app-list-sizecolumn',
  templateUrl: './list-sizecolumn.component.html',
  styleUrls: ['./list-sizecolumn.component.scss']
})
export class ListSizecolumnComponent implements OnInit{
  checkUserLogin = false;
  status: string = "";
  listSizeColumn: SizeColumn[] = [];
  displayedColumns: string[] = ['position', 'id', 'name', 'edit', 'delete'];
  dataSource: any;

  constructor(private notifier: NotifierService,
              private tokenService: TokenService,
              public dialog: MatDialog,
              private sizeColumnService: SizecolumnService,


  ) {
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateSizecolumnComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.sizeColumnService.getListSizeColumnService().subscribe(data => {
          this.listSizeColumn = data;
          this.dataSource = new MatTableDataSource<SizeColumn>(this.listSizeColumn);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateSizecolumnComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.sizeColumnService.getListSizeColumnService().subscribe(data => {
          this.listSizeColumn = data;
          this.dataSource = new MatTableDataSource<SizeColumn>(this.listSizeColumn);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DeleteSizecolumnComponent, {
      data: {
        dataKey: id
      }
    });
    // console.log('id --------------> ', id)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sizeColumnService.deleteSizeColumnService(id).subscribe(data => {
          // this.status = "Delete Success";
          this.notifier.ShowSuccessToastr('Success','Delete Category :')
          this.sizeColumnService.getListSizeColumnService().subscribe(data => {
            this.listSizeColumn = data;
            this.dataSource = new MatTableDataSource<SizeColumn>(this.listSizeColumn);
            this.dataSource.paginator = this.paginator;
          })
        })
      }
    });
  }


  // phan trang
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.sizeColumnService.getListSizeColumnService().subscribe(data => {
      this.listSizeColumn = data;
      this.dataSource = new MatTableDataSource<SizeColumn>(this.listSizeColumn);
      this.dataSource.paginator = this.paginator;
    })
  }


}
