import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../service/category.service";
import {Category} from "../../../../model/Category";
import {FormControl, Validators} from "@angular/forms";
import {Product} from "../../../../model/Product";
import {ProductService} from "../../../../service/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  form: any = {};
  listCategory: Category[] = [];
  status: string = ''
  product?: Product;
  validateCategory = new FormControl('', [
    Validators.required,
  ])

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categoryService.getListService().subscribe(data => {
      this.listCategory = data;
      console.log('listCategory --->', this.listCategory)
    })
    // this.singerService.getListSingerService().subscribe(data => {
    //   this.singerList = data;
    // })
  }


  onUploadAvatar($event: string) {
    this.form.avatar = $event
  }


  createProduct() {
    if (this.form.category == undefined) {
      this.status = 'Please select one Category'
      return
    }
    if (this.form.avatar == undefined) {
      this.status = 'Please upload avatar'
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
    // console.log('this product ----->', this.product)
    this.productService.createProductService(this.product).subscribe(data => {
      if (data.message == 'create_success') {
        this.status = 'Create Product success'
      }
    })
  }

}
