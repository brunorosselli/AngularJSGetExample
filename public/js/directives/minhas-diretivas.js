angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){ //( .directive ) Define que o módulo é o de uma Diretiva

    var ddo = {};

    ddo.restrict = 'AE'; // ( ddo.restrict ) Define quais são as funções da quela Diretiva, no caso ( AE ) Define que será um component.

    ddo.scope = {
        titulo: '@titulo' // ( ddo.scope ) recebe os valores informados dentro dos components, através do nome da diretiva.  
    };

    ddo.transclude = true; // ( ddo.transclude ) Ativa a opção de usar elementos filhos dentro da Diretiva que foi criada.

    ddo.templateUrl = 'js/directives/meu-painel.html'; // ( ddo.templateUrl ) faz o canminho para o elemento HTML da Diretiva

    return ddo;

});