import {Component, Inject, OnInit} from '@angular/core';
import {Category} from "../../../../model/Category";
import {ActivatedRoute} from "@angular/router";
import {NotifierService} from "../../../../service/notifier.service";
import {CategoryService} from "../../../../service/category.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SizeColumn} from "../../../../model/SizeColumn";
import {SizecolumnService} from "../../../../service/sizecolumn.service";

@Component({
  selector: 'app-update-sizecolumn',
  templateUrl: './update-sizecolumn.component.html',
  styleUrls: ['./update-sizecolumn.component.scss']
})
export class UpdateSizecolumnComponent implements OnInit{
  status = 'FORM UPDATE SIZE';

  // @ts-ignore
  sizeColumn = new SizeColumn();

  constructor(private actRouter: ActivatedRoute,
              private toast:NotifierService,
              private sizeColumnService: SizecolumnService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  updateSizeColumn() {
    // @ts-ignore
    this.sizeColumnService.updateSizeColumnService(this.sizeColumn?.id, this.sizeColumn).subscribe(data =>{
      // console.log('data UPDATE ========================>', data)
      if(data.message=='no_change'){
        this.toast.ShowWarningToastr('SIZE DOESN\'T CHANGE ?','Edit Size : ')
      } else if(data.message == 'name_existed'){
        this.toast.ShowErrorToastr('SIZE NAME EXISTED !','Edit Size :')
      } else if(data.message == 'update_success'){
        this.toast.ShowSuccessToastr('SUCCESS!!!','Edit Size :')
      }
    })
  }



  ngOnInit(): void {
    // console.log('data tu inject --->', this.data.dataKey)
    this.sizeColumnService.getSizeColumnDetailByIdService(this.data.dataKey).subscribe(data =>{
      this.sizeColumn = data;
      // console.log('category OLD -------------------- --->', this.category)
    })

  }

}
