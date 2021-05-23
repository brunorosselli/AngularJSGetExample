angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams){

    $scope.foto = {};
    // $scope.exibe = false;

    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success( (foto) => {
            $scope.foto = foto;
        })
        .error(() => { alert("Falha ao Editar a Foto!"); });
    }

    //Função que é executada no botão salvar.
    $scope.submeter = function() { 
       if ($scope.formulario.$valid){
        console.log($scope.foto);
        $http.post('v1/fotos', $scope.foto)
        .success(function(){
        console.log("Foto Cadastrada com sucesso!");
        })
        .error(function(error){
        console.log(error);
        console.log("debugMe!");
        });
            alert("Foto Adicionada Com Sucesso!")
       }
       else{
           alert("Falha ao Adicionar a Foto!")
       }
    };

});