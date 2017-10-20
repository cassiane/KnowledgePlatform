angular.module('abastecimentoApp.servicesUsuarios', []).factory('Usuario', function ($resource, $http, constantService) {
    return {
        get: get,
        add:add
    }

    function add(model, callback) {        
        $http.post(constantService.baseURL + '/usuarios', model)
        .then(function(response) {
            if (callback){
                callback(response.data);
            }
        });
    };

    function get(email, senha, callback) {
        $http.get(constantService.baseURL + '/usuario/email=' + email + '&senha=' + senha)
            .then(function (response) {
                if (callback) {
                    callback(response.data);
                }
            });
    };

    return this.resource;
}).service('popupService', function ($window) {
    this.showPopup = function (message) {
        return $window.confirm(message);
    }
}).service('constantService', function () {
    return {
        baseURL: 'http://localhost:3000/api'
    }
});