angular.module('alurapic').controller('FotosController', function($scope, $http){
    

 $scope.fotos = [];

 //Requisição HTTP GET com AngularJS
 $http.get('v1/fotos')
 .success(function(fotos){
    console.log(fotos);
    $scope.fotos = fotos;
 })
 .error(function(erro){
     console.log(erro)
 });
});