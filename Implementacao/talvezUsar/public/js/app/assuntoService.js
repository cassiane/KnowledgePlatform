angular.module('app.appService',[]).factory('Assunto',function($resource, $http, constantService){
    return {
        query: query,
        add: add        
    }

    function query(callback) {
        $http.get(constantService.baseURL + 'assuntos')
        .then(function(response) {
            if (callback){
                callback(response.data);
            }
        });
    };

    function add(model, callback) {        
        $http.post(constantService.baseURL + 'assuntos', model)
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
        baseURL : 'http://localhost:3000/api/'
    }
});