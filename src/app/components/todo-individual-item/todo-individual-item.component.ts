import { splitClasses } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { TodoModel } from 'src/app/models/TodoModel';

@Component({
  selector: 'app-todo-individual-item',
  templateUrl: './todo-individual-item.component.html',
  styleUrls: ['./todo-individual-item.component.css']
})
export class TodoIndividualItemComponent implements OnInit {
  @Input() todo:TodoModel;
  @Output() deleteIndividualTodo: EventEmitter<TodoModel> = new EventEmitter();

  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
  }

  // Set Dynamic CLasses
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  toggleMethod(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })
  }

  deleteTodo(todo) {
    this.deleteIndividualTodo.emit(todo);
  }
}
