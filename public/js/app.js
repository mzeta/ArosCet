var myApp = angular.module('myApp',[]);


myApp.controller('ordersController', ['$scope' , '$http', function($scope, $http) {


var refresh = function(){

	$http.get('/api/v1/orders').
        then(function(response) {
            $scope.orders = response.data;
            $scope.order="";
        });
};

refresh();

    $scope.agregarOrden = function() {
    	console.log("Agregando..." + $scope.order);
    	$http.post("/api/v1/orders", $scope.order);
    	refresh();
    }

    $scope.borrarOrden = function(id) {
    	console.log("Eliminando registro..." + id);
    	$http.delete("/api/v1/orders/" + id);
    	refresh();
    };


        
}]);


