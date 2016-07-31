"use strict";
var task_data_1 = require("./task-data");
var TaskService = (function () {
    function TaskService() {
        this.myTasks = [
            { id: 1, name: "task 1" },
            { id: 2, name: "task 2" },
            { id: 3, name: "task 3" },
            { id: 4, name: "task 4" },
            { id: 5, name: "task 5" },
            { id: 6, name: "task 6" },
            { id: 7, name: "task 7" }
        ];
    }
    TaskService.prototype.getTasks = function (id) {
        if (id === void 0) { id = "-1"; }
        console.log(this.myTasks);
        if (id === "-1") {
            return task_data_1.TASKS;
        }
        else {
            return task_data_1.TASKS.filter(function (task) {
                return task.id == id;
            })[0];
        }
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map