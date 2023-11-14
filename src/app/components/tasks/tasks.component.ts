import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {


  public tasks: Task[] = [];

  constructor(private TaskService: TaskService) {
  }

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe((task) => this.tasks = task);
  }

  deleteTask(task: Task) {
    this.TaskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter(t => t.id != task.id))
    );
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.TaskService.toggleTask(task).subscribe();
  }

  addNewTask(task: Task) {
    this.TaskService.addTask(task).subscribe((newTask)=>this.tasks.push(newTask));
  }

}
