import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!:Task[];

  constructor(private taskManager:TaskListService) { }

  ngOnInit(): void {
    this.tasks = this.taskManager.getAllTasks();
  }

  onDone(id:number): void {
    const task = this.taskManager.getTaskById(id);
    task.done === false ? task.done = true : task.done = false;
  }

  onDelete(id:number): void {
    this.taskManager.delete(id);
    this.tasks = this.taskManager.getAllTasks();
  }

}
