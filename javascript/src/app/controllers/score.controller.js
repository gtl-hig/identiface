(function () {
  'use strict';
  /* global angular */
  angular
    .module('identiface.controllers')
    .controller('ScoreController', ScoreController);
	
  function ScoreController ($scope,$http, $state, $uibModal, Game, Timer) {
    var vm = this;
    vm.color = Game.color;
    vm.base = Game.base;
    vm.mode = Game.mode;
    vm.level = Game.level;
    vm.initial = Game.learn;
    vm.choices = Game.choices;
    vm.score = Game.score;
    vm.replay = replay;
    vm.scorename = Game.scorename;

    function getScores(){
    	$http.get("http://gtl.hig.no/getjsonScore.php?GameID=16&from="+$scope.firstPos+"&num=10")
    	.then(function (response) {$scope.scores = response.data;});
  	}

    function replay () {
      Game.replay();
    }
    
    console.log('Submit  ' + "http://gtl.hig.no/logScore.php?GameID=16&User="+vm.scorename+"&Score="+vm.score);
    if ($scope.submited != vm.score){
    $scope.submited = vm.score;
    $http.get("http://gtl.hig.no/logScore.php?GameID=16&User="+vm.scorename+"&Score="+vm.score)
    .then(function (response) {
    	$scope.submitscores = response.data;
    	console.log(response.data);
    	$scope.myPos = response.data.Pos;
    	$scope.firstPos = response.data.Pos;
    	console.log($scope.firstPos);
    	$scope.firstPos = $scope.firstPos-(10/2);
    	if($scope.firstPos <0){
    		$scope.firstPos =0;
    	}
    	getScores();
    });
    }
    
  }
})();


