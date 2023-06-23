import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../../../model/Product";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProductService} from "../../../../service/product.service";
import {Category} from "../../../../model/Category";
import {CategoryService} from "../../../../service/category.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  status = 'Form Update Product';
  listCategory: Category[] = [];
  // @ts-ignore
  product = new Product();
  validateCategory = new FormControl('', [
    Validators.required,
  ])

  constructor(private actRouter: ActivatedRoute,
              private categoryService: CategoryService,
              private productService: ProductService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  updateProduct() {
    // console.log('id------------------>', this.product)
    // @ts-ignore
    this.productService.updateProductService(this.product?.id, this.product).subscribe(data => {
      // console.log('data UPDATE ========================>', data)
      if (data.message == 'no_change') {
        this.status = 'PRODUCT DOESN\'T CHANGE?'
      } else if (data.message == 'name_existed') {
        this.status = 'PRODUCT NAME EXISTED'
      } else if (data.message == 'update_success') {
        this.status = 'EDIT SUCCESS!!!'
      }
    })
  }

  onUploadAvatar($event: string) {
    this.product.avatar = $event
  }

  ngOnInit(): void {
    // console.log('data tu inject --->', this.data.dataKey)
    this.productService.getProductByIdService(this.data.dataKey).subscribe(data => {
      this.product = data;
      // console.log('category OLD -------------------- --->', this.product)
    })
    this.categoryService.getListService().subscribe(data => {
      this.listCategory = data;
      // console.log('listCategory --->', this.listCategory)
    })
  }


}
