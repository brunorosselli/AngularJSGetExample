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

 $scope.remover = function(foto){
    $http.delete('v1/fotos/' + foto._id)
    .success(() => { 
      
      var indexFoto = $scope.fotos.indexOf(foto); //Salva a foto que foi removida em um Indice

      $scope.fotos.splice(indexFoto, 1); //Remove a foto do Array do Indice

      alert("Foto Deletada Com Sucesso!") } )
    .error(() => { alert(erro, "Falha Ao Deletar Foto!") } );
 };

});