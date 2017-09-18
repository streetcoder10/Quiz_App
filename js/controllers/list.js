
(function(){angular.module("footballFacts").controller("listCtrl", ListController);
    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService){
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.data = DataService.teamsData;
        vm.activeTeam = {};
        vm.changeActiveTeam = changeActiveTeam;
        vm.activateQuiz = activateQuiz;
        vm.search = ""; 

        function changeActiveTeam(index){
            vm.activeTeam = index;
        }

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }


})();
