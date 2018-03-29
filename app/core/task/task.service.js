'use strict';

angular.
  module('core.task').
  service('taskService', function($http) {
    this.getTasks = function(callbackFunc) {
        $http({
            method: 'GET',
            url: 'http://localhost:8000/api/tasks',
            headers: { 'Content-Type': undefined }
            }).success(function(data){
            // With the data succesfully returned, call our callback
            callbackFunc(data);
        }).error(function(){
            alert("error");
        });
    }

    // var req = {
    //     method: 'GET',
    //     url: 'http://localhost:8000/api/tasks',
    //     headers: {
    //         'Content-Type': undefined
    //     }
    // }

    // var rep = {};
    
    // $http(req).then(function(response){
    //     console.log('req', response);
    //     if (response.status == 200) {
    //         rep = response.data;
    //     } else {
    //         rep = 'error';
    //     }
    // });

    // return rep;
});
