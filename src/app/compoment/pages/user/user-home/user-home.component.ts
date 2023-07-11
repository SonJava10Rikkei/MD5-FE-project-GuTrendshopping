import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private authService: AuthService,
              private notifier: ToastrService,

  ) {
  }

  ngOnInit(): void {
    // if(this.authService.getRigister()){
    //   this.notifier.success('Success !','Login :',{
    //     timeOut:10000
    //   })
    // }

  }

}

