/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('abastecimentoApp.services',[]).factory('Abastecimento',function($resource, $http, constantService){
    return {
        query: query,
        get: get,
        update: update,
        add: add,
        remove: remove
    }

    function get(id, callback) {
        $http.get(constantService.baseURL + '/checkout/' + id)
        .then(function(response) {
            if (callback){
                callback(response.data);
            }
        });
    };

    function remove(id, callback) {
        $http.delete(constantService.baseURL + '/checkout/' + id)
        .then(function(response) {
            if (callback){
                callback(response.data);
            }
        });
    };

    function add(model, callback) {
        if (model.details){
            model.details.amount = model.amount;
        }
        $http.post(constantService.baseURL + '/checkout', model)
        .then(function(response) {
            if (callback){
                callback(response.data);
            }
        });
    };

    function update(id, model, callback) {
        if (model.details){
            model.details.amount = model.amount;
        }
        $http.put(model, constantService.baseURL + '/checkout/' + id)
        .then(function(response) {
            if (callback){
                callback(response.data);
            }
        });
    };

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