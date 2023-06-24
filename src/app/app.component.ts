import {Component, HostListener, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MD5-FE';

  constructor(
    private toast:ToastrService,
  ) {
  }

  ngOnInit(): void {
  }


}


