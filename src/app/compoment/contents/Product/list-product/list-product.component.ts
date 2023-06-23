import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

import {CreateProductComponent} from "../create-product/create-product.component";
import {TokenService} from "../../../../service/token.service";
import {ProductService} from "../../../../service/product.service";
import {Product} from "../../../../model/Product";
import {UpdateProductComponent} from "../update-product/update-product.component";
import {DeleteProductComponent} from "../delete-product/delete-product.component";
import {Category} from "../../../../model/Category";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  checkUserLogin = false;
  status: string = "";
  listProduct: Product[] = [];
  displayedColumns: string[] = ['position', 'name','avatar','category', 'price','quantity',  'edit', 'delete'];
  dataSource: any;

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private productService: ProductService
  ) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.productService.getListProductService().subscribe(data => {
          this.listProduct = data;
          this.dataSource = new MatTableDataSource<Product>(this.listProduct);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.productService.getListProductService().subscribe(data => {
          this.listProduct = data;
          this.dataSource = new MatTableDataSource<Product>(this.listProduct);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      data: {
        dataKey: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProductService(id).subscribe(data => {
          this.status = "Delete Success";
          this.productService.getListProductService().subscribe(data => {
            this.listProduct = data;
            this.dataSource = new MatTableDataSource<Product>(this.listProduct);
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
    this.productService.getListProductService().subscribe(data => {
      this.listProduct = data;
      this.dataSource = new MatTableDataSource<Product>(this.listProduct);
      this.dataSource.paginator = this.paginator;
    })
  }
}
