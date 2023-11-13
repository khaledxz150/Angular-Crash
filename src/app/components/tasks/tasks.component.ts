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
    this.TaskService.getTasks().subscribe((task)=> this.tasks = task);
  }

}