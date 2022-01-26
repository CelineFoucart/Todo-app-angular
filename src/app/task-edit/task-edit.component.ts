import { Component, OnInit } from '@angular/core';
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

  constructor(private taskManager:TaskListService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.task = this.taskManager.getTaskById(id);
  }
}
