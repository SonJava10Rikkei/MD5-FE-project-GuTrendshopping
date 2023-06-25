import {Component, Inject, OnInit} from '@angular/core';
import {Category} from "../../../../model/Category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../../service/category.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SizeColumn} from "../../../../model/SizeColumn";
import {SizecolumnService} from "../../../../service/sizecolumn.service";

@Component({
  selector: 'app-delete-sizecolumn',
  templateUrl: './delete-sizecolumn.component.html',
  styleUrls: ['./delete-sizecolumn.component.scss']
})
export class DeleteSizecolumnComponent implements OnInit{
  sizeColumn?: SizeColumn;

  constructor(private actRouter: ActivatedRoute,
              private sizeColumnService: SizecolumnService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {

    // console.log("this.data inject", this.data.dataKey)
    this.sizeColumnService.getSizeColumnDetailByIdService(this.data.dataKey).subscribe(data => {
      this.sizeColumn = data;
      // console.log("data delete -----> ", data)
    })
  }

}
