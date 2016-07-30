import {Component,OnInit} from "@angular/core";
import {TaskService} from "./task.service";
import {TaskEdit} from "./task-edit.component";
import {Task} from "./Task";

@Component({
    selector: 'task-list',
    template: `
       <ul>
            <li *ngFor="let task of tasks" (click)="onClick(task)">{{task.name}}</li>
       </ul>
       <task-edit [task]="selectedTask"></task-edit>
    `,
    providers:[TaskService],
    directives : [TaskEdit]
})

export class TaskList implements OnInit{
    tasks:Task[];
    selectedTask:Task;

    constructor(
        private service:TaskService
    ){}

    onClick(task){
        console.log(task);
        this.selectedTask = task;
    }

    ngOnInit():any {
        this.tasks = this.service.getTasks();

    }

}