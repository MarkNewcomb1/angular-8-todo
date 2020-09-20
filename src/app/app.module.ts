import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTheTodosComponent } from './components/all-the-todos/all-the-todos.component';
import { TodoIndividualItemComponent } from './components/todo-individual-item/todo-individual-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTheTodosComponent,
    TodoIndividualItemComponent,
    HeaderComponent,
    AddTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
