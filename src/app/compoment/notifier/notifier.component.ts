import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {NotifierService} from "../../service/notifier.service";

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private toast: NotifierService) {
  }

  ShowSuccessToastr() {
    this.toast.ShowSuccessToastr('Toastr added successfully', 'Toastr Tutorial');
  }

  ShowErrorToastr() {
    this.toast.ShowErrorToastr('Toastr error testing', 'Toastr Tutorial');
  }

  ShowWarningToastr() {
    this.toast.ShowWarningToastr('Toastr warning testing', 'Toastr Tutorial');
  }

  ShowInfoToastr() {
    this.toast.ShowInfoToastr('Toastr info testing', 'Toastr Tutorial');
  }


}
