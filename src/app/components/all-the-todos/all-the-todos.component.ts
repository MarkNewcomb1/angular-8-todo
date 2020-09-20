import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { TodoModel } from '../../models/TodoModel';
@Component({
  selector: 'app-all-the-todos',
  templateUrl: './all-the-todos.component.html',
  styleUrls: ['./all-the-todos.component.css']
})
export class AllTheTodosComponent implements OnInit {

  allTheTodos:TodoModel[];
  constructor(private todoService:TodoServiceService) { }

  //kinda like ComponentDidMount - runs right away
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.allTheTodos = todos;
    });
  }

  deleteTodo(todo:TodoModel) {
    this.allTheTodos = this.allTheTodos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodoOnServer(todo).subscribe();
  }

  addTodo(todo:TodoModel) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.allTheTodos.push(todo);
    })
  }

}
