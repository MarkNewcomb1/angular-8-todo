import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title:string
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newTodo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(newTodo);
  }

}
