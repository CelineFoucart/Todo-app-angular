import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  { 
    path:'', 
    component:TaskListComponent
  },
  { 
    path: 'create', 
    component: TaskCreateComponent,
    data: {title: 'Créer une tâche | Todo-app'}
  },
  { 
    path: 'task/:id', 
    component:TaskViewComponent,
    data: {title: 'Voir une tâche | Todo-app'}
  },
  { 
    path: 'task/:id/edit', 
    component: TaskEditComponent,
    data: {title: 'Editer une tâche | Todo-app'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
