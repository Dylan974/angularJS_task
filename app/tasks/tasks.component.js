'use strict';

// Register `tasks` component, along with its associated controller and template
angular.
  module('tasks').
  component('tasks', {
    templateUrl: 'tasks/tasks.template.html',
    controller: ['taskService',
      function TasksController(taskService) {
        self = this;
        taskService.getTasks(function(dataResponse) {
            self.tasks = dataResponse;
        });
      }
    ]
  });
