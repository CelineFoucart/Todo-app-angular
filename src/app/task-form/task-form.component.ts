import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../model/task.model';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() task!:Task;
  @Input() createMode?:boolean = false;
  title!:FormControl;
  description!:FormControl;
  submit:boolean = false;
  error:boolean = false;

  constructor(private taskManager:TaskListService, private router:Router) { }

  ngOnInit(): void {
    this.title = new FormControl(this.task.title, [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.description = new FormControl(this.task.description, [
      Validators.required,
      Validators.minLength(10)
    ]);
  }

  onSubmit(event:Event): void {
    event.preventDefault();
    this.submit = true;
    if(!this.title.invalid && !this.description.invalid) {
      this.error = false;
      this.persist();
    } else {
      this.error = true;
    }
  }

  persist():void {
    if(this.createMode === true) {
      this.taskManager.add(this.title.value, this.description.value);
      this.router.navigateByUrl('');
    } else {
      this.taskManager.edit(this.title.value, this.description.value, this.task.id);
    }
  }

}
