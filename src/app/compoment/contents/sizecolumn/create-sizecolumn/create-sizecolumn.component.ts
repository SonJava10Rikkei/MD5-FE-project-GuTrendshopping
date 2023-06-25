import {Component} from '@angular/core';
import {Category} from "../../../../model/Category";
import {CategoryService} from "../../../../service/category.service";
import {NotifierService} from "../../../../service/notifier.service";
import {SizeColumn} from "../../../../model/SizeColumn";
import {SizecolumnService} from "../../../../service/sizecolumn.service";

@Component({
  selector: 'app-create-sizecolumn',
  templateUrl: './create-sizecolumn.component.html',
  styleUrls: ['./create-sizecolumn.component.scss']
})
export class CreateSizecolumnComponent {
  form: any = {};
  sizeColumn?: SizeColumn;
  status: string = 'Form Create SizeColumn'

  constructor(private sizeColumnService: SizecolumnService,
              private toast: NotifierService,
  ) {
  }

  onUpload($event: string) {
    this.form.avatar = $event
  }

  createSizeColumn() {
    this.sizeColumn = new SizeColumn(
      this.form.name,
    )
    // @ts-ignore
    this.sizeColumnService.createSizeColumnService(this.sizeColumn).subscribe(data => {
      if (data.message == 'name_exist') {
        this.toast.ShowErrorToastr("Please try again !", "SizeColumn name already exists :")
      } else if (data.message == 'create_success') {
        this.toast.ShowSuccessToastr("Success!", "Create SizeColumn :")
      }
    })
  }



}
