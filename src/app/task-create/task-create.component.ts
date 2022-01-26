import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  
  task!:Task;

  constructor() { }

  ngOnInit(): void {
    this.task = new Task('', '');
  }

}
