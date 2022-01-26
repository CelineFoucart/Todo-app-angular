import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/task.model';
import { TaskListService } from '../services/task-list.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  task!:Task;
  title = new FormControl('titre');

  constructor(
    private taskManager:TaskListService, 
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.task = this.taskManager.getTaskById(id);
  }

  onDelete(id:number): void {
    this.taskManager.delete(id);
    this.router.navigateByUrl('');
  }
}
