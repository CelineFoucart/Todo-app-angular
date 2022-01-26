import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { HttpClient } from '@angular/common/http';
import { data } from './todo';

type resultType = {
  id:number, 
  title:string,
  description:string,
  date:string,
  done:boolean
};

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
      console.log(id);
      throw new Error("Cette tâche n'existe pas !");
    }
    return task;    
  }

  add(task:Task): boolean {
    return true;
  }

  edit(Task:Task): boolean {
    return true;
  }

  delete(id:number): boolean {
    
    return true;
  }

  init(): void {
    if(this.initialized) {
      console.log("Data already initialized");
      return;
    }
    data.forEach(iterator => {
      const task:Task = new Task(
        iterator.id, 
        iterator.title, 
        iterator.description, 
        iterator.date,
        iterator.done
      );
      this.tasks.push(task);
    });
    
    this.initialized = true;
  }
}
