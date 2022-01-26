import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../model/task.model';
import { TaskListService } from '../services/task-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  
  task!:Task;
  title!:FormControl;
  description!:FormControl;

  constructor(private taskManager:TaskListService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.task = this.taskManager.getTaskById(id);
    this.title = new FormControl(this.task.title);
    this.description = new FormControl(this.task.description);
  }

  

}
