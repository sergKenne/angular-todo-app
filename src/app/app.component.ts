import { Component, OnInit } from '@angular/core';
export interface ITodos {
  id: number
  name: string;
  age: number;
  email: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  
  todos: ITodos[] = []

  ngOnInit(): void {
    this.todos = [
      { id: 1, name: 'Serge Kenne', age: 23, email: 'kenne_serge@mail.ru' },
      { id: 2, name: 'Tom lee', age: 32, email: 'tom@yahoo.fr' },
      { id: 3, name: 'Karim wade', age: 47, email: 'kamin@mail.ru' },
      { id: 4, name: 'Toukom serge', age: 67, email: 'toukom Marcial' },
    ];
  }
}
