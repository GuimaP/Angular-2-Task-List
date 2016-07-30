"use strict";
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return [
            { id: 1, name: "task 1" },
            { id: 2, name: "task 2" },
            { id: 3, name: "task 3" },
            { id: 4, name: "task 4" },
            { id: 5, name: "task 5" },
            { id: 6, name: "task 6" },
            { id: 7, name: "task 7" }
        ];
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map