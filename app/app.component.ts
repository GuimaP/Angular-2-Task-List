import {Component} from "@angular/core";
import {RouteConfig,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {TaskList} from "./task-list.component";
import {TaskService} from "./task.service";

@RouteConfig([
    {path: '/task/list', name:'Task.list', component:TaskList }
])

@Component({
    selector:  "my-app",
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['Task.list']">Listar Task</a>
        <router-outlet></router-outlet>

    `,
    directives:[ROUTER_DIRECTIVES],
    providers: [TaskService]
})
export class AppComponent{
    title:string;
    constructor(){
        this.title = 'HOME';
    }
}