import {Component,Input} from "@angular/core";
import {Task} from './Task';

@Component({
    selector: 'task-edit',
    template:`
        <div *ngIf="task">
            <input type='text' [(ngModel)]='task.name'/>
        </div>
    `
})
export class TaskEdit {
    @Input()
    task:Task;

    constructor(){}
}