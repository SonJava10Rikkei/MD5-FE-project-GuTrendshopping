import {Component} from '@angular/core';

@Component({
  selector: 'app-dad-output',
  templateUrl: './dad-output.component.html',
  styleUrls: ['./dad-output.component.scss']
})
export class DadOutputComponent {
  listStudent = [];

  getData($event: any) {
    this.listStudent = $event;
  }
}
