import {Component, OnInit} from "@angular/core";
import {Router,RouteParams} from "@angular/router-deprecated";
import {Task} from './Task';
import {TaskService} from './task.service';

@Component({
    selector: 'task-edit',
    template:`
        <h3>Edição de Tarefa</h3>
        <div *ngIf="task">
            <input type='text' [(ngModel)]='task.name'/>
            <button type="button" (click)="goToTaskList()">Salvar</button>
        </div>
    `
})
export class TaskEdit implements OnInit{
    task:Task;

    constructor(
        private params:RouteParams,
        private route:Router,
        private taskService:TaskService
    ){}

    ngOnInit():any {
        this.getTask();
    }

    getTask(){
        let id = this.params.get('id');
        this.task = this.taskService.getTasks(id);
        console.log(this.task);
    }

    goToTaskList():void{
        console.log(this.task);
        this.route.navigate(['Task.list']);
    }
}