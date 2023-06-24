import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private toast: ToastrService) { }
  ShowSuccessToastr(message:any,title:any) {
    this.toast.success(message, title, {
      positionClass: "toast-bottom-right",
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 400,
    });
  }

  ShowErrorToastr(message:any,title:any) {
    this.toast.error(message, title, {
      positionClass: "toast-bottom-right",
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 400,
    });
  }

  ShowWarningToastr(message:any,title:any) {
    this.toast.warning(message, title, {
      positionClass: "toast-bottom-right",
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 400,
    });
  }

  ShowInfoToastr(message:any,title:any) {
    this.toast.info(message, title, {
      positionClass: "toast-bottom-right",
      timeOut: 3000,
      easing: 'ease-in',
      easeTime: 400,
    });
  }
}
