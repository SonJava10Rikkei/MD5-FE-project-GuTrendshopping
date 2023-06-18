import {Component} from '@angular/core';

@Component({
  selector: 'app-dad-input',
  templateUrl: './dad-input.component.html',
  styleUrls: ['./dad-input.component.scss']
})
export class DadInputComponent {
  listStudent = ['yen', 'chuan'];
  addStudent(student: string){
    this.listStudent.push(student)
  }

}
