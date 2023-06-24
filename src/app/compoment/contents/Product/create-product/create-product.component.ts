import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../service/category.service";
import {Category} from "../../../../model/Category";
import {FormControl, Validators} from "@angular/forms";
import {Product} from "../../../../model/Product";
import {ProductService} from "../../../../service/product.service";
import {NotifierService} from "../../../../service/notifier.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  form: any = {};
  listCategory: Category[] = [];
  status: string = 'FORM CREATE PRODUCT'
  product?: Product;
  validateCategory = new FormControl('', [
    Validators.required,
  ])

  constructor(private categoryService: CategoryService,
              private toast: NotifierService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categoryService.getListService().subscribe(data => {
      this.listCategory = data;
      // console.log('listCategory --->', this.listCategory)
    })
    // this.categoryService.getListSingerService().subscribe(data => {
    //   this.singerList = data;
    // })
  }


  onUploadAvatar($event: string) {
    this.form.avatar = $event
  }


  createProduct() {
    if (this.form.category == undefined) {
      this.toast.ShowErrorToastr('Please select one Category !','Create Product :')
      return
    }
    if (this.form.avatar == undefined) {
      this.toast.ShowErrorToastr('Please select upload choose avatar file !','Create Product :')
      return;
    }

    this.product = new Product(
      this.form.name,
      this.form.category,
      this.form.price,
      this.form.quantity,
      this.form.avatar,
      this.form.description,
    )
    if (this.form.name != undefined) {
      this.productService.createProductService(this.product).subscribe(data => {
        if (data.message == 'name_exist') {
          this.toast.ShowWarningToastr('The name is existed. Please try again!','Create Product :')
          return;
        } else {
          // console.log('this product ----->', this.product)
          this.toast.ShowSuccessToastr('Success !','Create Product :')
        }
      })
    }
  }

}
