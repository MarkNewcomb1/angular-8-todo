import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoModel } from '../models/TodoModel';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

    getTodos():Observable<TodoModel[]> {
      return this.http.get<TodoModel[]>(`${this.todosUrl}${this.todosLimit}`);
    }

    toggleCompleted(todo: TodoModel):Observable<any> {
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.put(url, todo, httpOptions);
    }

    deleteTodoOnServer(todo: TodoModel):Observable<TodoModel> {
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.delete<TodoModel>(url, httpOptions);
    }

    addTodo(todo:TodoModel):Observable<TodoModel> {
      return this.http.post<TodoModel>(this.todosUrl, todo, httpOptions);
    }
  
}
