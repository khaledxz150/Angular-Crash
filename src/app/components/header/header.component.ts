import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
  title: string = "Task tracer";
  showAddTask: boolean = false;
  subscription!: Subscription;

  toggleAddTask() {
    this.uiService.toggleShowAddTaskDiv();
  }

  constructor(private uiService: UiService, private router:Router) {
    this.subscription =this.uiService.onToggle().subscribe((value)=>this.showAddTask = value);
  }

  ngOnInit(): void {

  }

  hasRoute(route:string)
  {
    return this.router.url === route;
  }


}
