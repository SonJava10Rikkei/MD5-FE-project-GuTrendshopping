import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../../../model/Product";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProductService} from "../../../../service/product.service";
import {Category} from "../../../../model/Category";
import {CategoryService} from "../../../../service/category.service";
import {FormControl, Validators} from "@angular/forms";
import {NotifierService} from "../../../../service/notifier.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  status = 'FORM UPDATE PRODUCT';
  listCategory: Category[] = [];
  // @ts-ignore
  product = new Product();
  validateCategory = new FormControl('', [
    Validators.required,
  ])

  constructor(private actRouter: ActivatedRoute,
              private toast:NotifierService,
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
        this.toast.ShowWarningToastr('PRODUCT DOESN\'T CHANGE ?','Edit Product : ')
      } else if (data.message == 'name_existed') {
        this.toast.ShowErrorToastr('PRODUCT NAME EXISTED !','Edit Product :')
      } else if (data.message == 'update_success') {
        this.toast.ShowSuccessToastr('SUCCESS!!!','Edit Product :')

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
