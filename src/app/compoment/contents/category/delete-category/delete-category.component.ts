import {Component, Inject, OnInit} from '@angular/core';
import {Category} from "../../../../model/Category";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../../service/category.service";

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {
  category?: Category;

  constructor(private actRouter: ActivatedRoute,
              private categoryService: CategoryService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {

    // console.log("this.data inject", this.data.dataKey)
    this.categoryService.getCategoryById(this.data.dataKey).subscribe(data => {
      this.category = data;
      // console.log("data delete -----> ", data)
    })
  }
}
