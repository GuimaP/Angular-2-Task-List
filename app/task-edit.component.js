"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var task_service_1 = require('./task.service');
var TaskEdit = (function () {
    function TaskEdit(params, route, taskService) {
        this.params = params;
        this.route = route;
        this.taskService = taskService;
    }
    TaskEdit.prototype.ngOnInit = function () {
        this.getTask();
    };
    TaskEdit.prototype.getTask = function () {
        var id = this.params.get('id');
        this.task = this.taskService.getTasks(id);
        console.log(this.task);
    };
    TaskEdit.prototype.goToTaskList = function () {
        console.log(this.task);
        this.route.navigate(['Task.list']);
    };
    TaskEdit = __decorate([
        core_1.Component({
            selector: 'task-edit',
            template: "\n        <h3>Edi\u00E7\u00E3o de Tarefa</h3>\n        <div *ngIf=\"task\">\n            <input type='text' [(ngModel)]='task.name'/>\n            <button type=\"button\" (click)=\"goToTaskList()\">Salvar</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router, task_service_1.TaskService])
    ], TaskEdit);
    return TaskEdit;
}());
exports.TaskEdit = TaskEdit;
//# sourceMappingURL=task-edit.component.js.map