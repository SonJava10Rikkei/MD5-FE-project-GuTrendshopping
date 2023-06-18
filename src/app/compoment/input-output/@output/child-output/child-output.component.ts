import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent {
  listStudent = ['Long', 'Huy'];
  @Output() sendData = new EventEmitter;

  addStudent(student: string) {
    this.listStudent.push(student);
    this.sendData.emit(this.listStudent)
  }
}
