import {Component} from "@angular/core";
import {Task} from "./Task";
import {TASKS} from "./task-data";

export class TaskService {
    private myTasks:Task[];
    constructor(){
        this.myTasks = [
            {id: 1, name: "task 1"},
            {id: 2, name: "task 2"},
            {id: 3, name: "task 3"},
            {id: 4, name: "task 4"},
            {id: 5, name: "task 5"},
            {id: 6, name: "task 6"},
            {id: 7, name: "task 7"}
        ];
    }
    getTasks(id:string = "-1"){

        console.log(this.myTasks);
        if(id === "-1"){
            return TASKS;
        }else {
            return TASKS.filter(function(task){
                return task.id == id;
            })[0];
        }

    }
}