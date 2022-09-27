import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { EditComponent } from './edit/edit.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { AppRoutingModule } from 'src/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    TodoListComponent,
    SearchFormComponent,
    EditComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
