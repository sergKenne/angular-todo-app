import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoListComponent } from "./app/todo-list/todo-list.component";
import { EditComponent } from "./app/edit/edit.component";
import { CreateTodoComponent } from "./app/create-todo/create-todo.component";


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'edit', component: EditComponent },
  { path: 'create', component: CreateTodoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}