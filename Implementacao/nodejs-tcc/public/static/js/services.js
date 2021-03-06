/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('abastecimentoApp.services',[]).factory('Assunto',function($resource, $http, constantService){
    return {
        query: query        
    }    

    function query(callback) {
        $http.get(constantService.baseURL + '/assuntos')
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
        baseURL : 'http://localhost:3000/api'
    }
});