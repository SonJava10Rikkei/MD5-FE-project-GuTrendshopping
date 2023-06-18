import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Category} from "../../../../model/Category";
import {CategoryService} from "../../../../service/category.service";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  status = 'Form Update Category';

  // @ts-ignore
  category = new Category();

  constructor(private actRouter: ActivatedRoute,
              private categoryService: CategoryService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  updateCategory() {
    // @ts-ignore
    this.categoryService.updateCategory(this.category?.id, this.category).subscribe(data =>{
      console.log('data UPDATE ========================>', data)
      if(data.message=='no_change'){
        this.status = 'MÀY VÀO ĐÂY VỚI MỤC ĐÍCH GÌ???'
      } else if(data.message == 'name_existed'){
        this.status ='TÊN CATEGORY ĐANG BỊ TRÙNG'
      } else if(data.message == 'update_success'){
        this.status = 'SỬA THÀNH CÔNG!!!'
      }
    })
  }

  onUpload($event: string) {
    this.category.avatar = $event
  }

  ngOnInit(): void {
    console.log('data tu inject --->', this.data.dataKey)
    this.categoryService.getCategoryById(this.data.dataKey).subscribe(data =>{
      this.category = data;
      console.log('category OLD -------------------- --->', this.category)
    })
    // this.actRouter.paramMap.subscribe(categoryId => {
    //   console.log('categoryId ---->', categoryId)
    //   // @ts-ignore
    //   const id = +categoryId.get('id');
    //   console.log('id ---->', id)
    //   this.categoryService.getCategoryById(id).subscribe(data => {
    //     this.category = data;
    //     console.log('category --->', this.category)
    //   })
    // })
  }
}
