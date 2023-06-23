import {Component, Inject, OnInit} from '@angular/core';
import {Category} from "../../../../model/Category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../../service/category.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Product} from "../../../../model/Product";
import {ProductService} from "../../../../service/product.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit{
  product?: Product;

  constructor(private actRouter: ActivatedRoute,
              private productService: ProductService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {

    // console.log("this.data inject", this.data.dataKey)
    this.productService.getProductByIdService(this.data.dataKey).subscribe(data => {
      this.product = data;
      // console.log("data delete -----> ", data)
    })
  }

}
