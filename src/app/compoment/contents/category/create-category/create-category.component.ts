import {Component} from '@angular/core';
import {CategoryService} from "../../../../service/category.service";
import {Category} from "../../../../model/Category";
import {NotifierService} from "../../../../service/notifier.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
  form: any = {};
  category?: Category;
  status: string = 'Form Create Category'

  constructor(private categoryService: CategoryService,
              private toast:NotifierService,

              ) {
  }
  onUpload($event: string) {
    this.form.avatar = $event
  }

  createCategory() {
    this.category = new Category(
      this.form.name,
      this.form.avatar
    )
    if (this.form.avatar == undefined) {
      // this.status = "Avatar is required! Please choose upload avatar"
      this.toast.ShowErrorToastr("Please select upload choose avatar file !","Avatar is required :")
    } else {
      this.categoryService.createCategoryService(this.category).subscribe(data => {
        if (data.message == 'name_exist') {
          this.toast.ShowErrorToastr("Please try again !","Category name already exists :")
        } else if (data.message == 'success') {
          this.toast.ShowErrorToastr("Success!","Create Category :")
        }
      })
    }
  }
}
