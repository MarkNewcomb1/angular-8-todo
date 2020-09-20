import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text:string = 'angular-crash-todolist';

  constructor() {
    this.changeText('John');
  }
changeText(name:string):void {
  this.text = name;
}
}
