import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeLast } from 'rxjs';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolab';

  todoArr: Todo[] = [
    {task: "Take out trash",
    completed: true},
    {task: "Do dishes",
    completed: false},
    {task: "Sweep floors",
    completed: false},
    {task: "Clean windows",
    completed: true}
  ]

  addTodo(formParam: NgForm): void {
    let newTodo: Todo = {
      task: formParam.form.value.todo,
      completed: false
    };
    this.todoArr.push(newTodo);
}

completeTask(task: Todo): void {
  task.completed = true;
}

undoTask(task: Todo): void {
  task.completed = false;
}

removeTask(i: number): void {
 let text = "Are you sure you want to remove this task? Press OK to confirm or Cancel to go back without making changes."
 if (confirm(text) === true){
  this.todoArr.splice(i, 1);
 }
}

}






