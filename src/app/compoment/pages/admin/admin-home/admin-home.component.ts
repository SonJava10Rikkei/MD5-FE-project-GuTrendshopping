import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-admin-user-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  ngOnInit(): void {
    $(document).ready(function () {
      $('#example').DataTable({
        responsive: true
      });
    });
  }

}









