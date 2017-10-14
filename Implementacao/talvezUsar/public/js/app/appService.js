angular.module('app.appService',[]).factory('App',function($resource, $http, constantService){
    return {
        get: login
    }

    function login(id, senha, callback) {
        $http.post(constantService.baseURL + '/login')
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
        baseURL : 'http://localhost:3000/api/app'
    }
});