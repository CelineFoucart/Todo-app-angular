import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { HttpClient } from '@angular/common/http';
import { data } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  private initialized:boolean = false;

  private tasks:Task[] = [];
  constructor(private http: HttpClient) { 
    this.init();
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id:number): Task {
    const task = this.tasks.find(task => task.id === id);
    if(task === undefined) {
      throw new Error("Cette tâche n'existe pas !");
    }
    return task;    
  }

  getLastInsertId(): number {
    return this.tasks[this.tasks.length - 1].id;
  }

  add(title:string, description:string): void {
    const id = this.getLastInsertId() + 1;
    const task = new Task(title, description, id);
    task.date = new Date();
    this.tasks.push(task);
  }

  edit(title:string, description:string, id:number): void {
    const task = this.getTaskById(id);
    task.setValues(title, description);
  }

  delete(id:number): void {
    this.tasks = this.tasks.filter(element => {
      return element.id !== id;
    });
  }

  init(): void {
    if(this.initialized) {
      console.log("Data already initialized");
      return;
    }
    data.forEach(iterator => {
      const task:Task = new Task(
        iterator.title, 
        iterator.description, 
        iterator.id, 
        iterator.date,
        iterator.done
      );
      this.tasks.push(task);
    });
    
    this.initialized = true;
  }
}
