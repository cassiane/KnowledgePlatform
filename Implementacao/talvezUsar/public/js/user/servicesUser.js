angular.module('userApp.services',[]).factory('User',function($resource, $http, constantService){
    return {
        query: query,        
        add: add
    }

    function add(model, callback) {
        if (model.details){
            model.details.amount = model.amount;
        }
        $http.post(constantService.baseURL, model)
        .then(function(response) {
            if (callback){
                callback(response.data);
            }
        });
    };

    function query(callback) {
        $http.get(constantService.baseURL)
        .then(function(response) {
            if (callback){
                callback(response.data);
            }
        });
    };
    
    return this.resource;
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
}).service('constantService',function(){
    return {
        baseURL : 'http://localhost:3000/api/usuarios'
    }
});