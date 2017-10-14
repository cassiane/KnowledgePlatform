angular.module('abastecimentoApp.servicesNotificacoes', []).factory('Notificacao', function ($resource, $http, constantService) {
    return {
        query: query,
        get:get
    }

    function query(callback) {
        $http.get(constantService.baseURL + '/notificacoes')
            .then(function (response) {
                if (callback) {
                    callback(response.data);
                }
            });
    };

    function get(id, callback) {
        $http.get(constantService.baseURL + '/notificacoes/' + id)
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