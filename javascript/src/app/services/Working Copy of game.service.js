(function () {
  'use strict';
  /* global _, angular*/


  angular.module('identiface.services')
    .factory('Game', function ($state) {
        var stages = [
          // 1
          {
        
            'color': '#74C390',
            'seconds': 15,
            //'GObtnDelay': 5000, // for future possible use
            'asked': ['level1/a1', 'level1/a2', 'level1/a3'],
            'correct': ['level1/c1', 'level1/c2', 'level1/c3'],
            'wrong': [
              'level1/w1', 'level1/w2', 'level1/w3',
              'level1/w4', 'level1/w5', 'level1/w6',
              'level1/w7', 'level1/w8', 'level1/w9'
            ]
          },
          // 2
          {
            'color': '#8FA4E9',
            'seconds': 15,
            //'GObtnDelay': 5000, // for future possible use
            'asked': ['level2/a1', 'level2/a2', 'level2/a3'],
            'correct': ['level2/c1', 'level2/c2', 'level2/c3'],
            'wrong': [
              'level2/w1', 'level2/w2', 'level2/w3',
              'level2/w4', 'level2/w5', 'level2/w6',
              'level2/w7', 'level2/w8', 'level2/w9'
            ]
          },
          // 3
          {
            'color': '#FFB534',
            'seconds': 15,
            //'GObtnDelay': 1000, // for future possible use
            'asked': ['level3/a1', 'level3/a2', 'level3/a3'],
            'correct': ['level3/c1', 'level3/c2', 'level3/c3'],
            'wrong': [
              'level3/w1', 'level3/w2', 'level3/w3',
              'level3/w4', 'level3/w5', 'level3/w6',
              'level3/w7', 'level3/w8', 'level3/w9'
            ]
          },
          // 4
          {
            'color': '#E46653',
            'seconds': 10,
            //'GObtnDelay': 3000, // for future possible use
            'asked': ['level4/a1', 'level4/a2', 'level4/a3'],
            'correct': ['level4/c1', 'level4/c2', 'level4/c3'],
            'wrong': [
              'level4/w1', 'level4/w2', 'level4/w3',
              'level4/w4', 'level4/w5', 'level4/w6',
              'level4/w7', 'level4/w8', 'level4/w9'
            ]
          }
        ];

        function timeToScore (millis) {
          return Math.trunc(instance.seconds * 1000 / millis * 10);
        }

        function randomChoice (array) {
          var index = Math.floor(Math.random() * Object.keys(array).length);
          console.log("set base"+$state.current.data.base); // outputs 5;
          return $state.current.data.base + array[index] + '.png'; // '/img/cars/' $state.'base' 
        }

        var instance = {
          'levelsnr': 4,
          'addScore': function (millis) {
            instance.score += timeToScore(millis);
          },
          'newGame': function (level) {
            var stage = stages[level - 1];
            if (level === 1) {
              instance.score = 0;
            }
            instance.color = stage.color;
            instance.seconds = stage.seconds;
            //instance.GObtnDelay = stage.GObtnDelay; // for future possilbe use
            instance.learn = randomChoice(stage.asked);
            instance.correctChoice = randomChoice(stage.correct);
            var tmp = [instance.correctChoice];
            var i;
            for (i = 0; i < 3; i += 1) {
              var wrongChoice;
              do {
                wrongChoice = randomChoice(stage.wrong);
              }
              while (_.includes(tmp, wrongChoice));
              tmp.push(wrongChoice);
            }
            instance.choices = _.shuffle(tmp);
          },
          'replay': function () {
            $state.go('home');
          },          
          'scores': function () {
            $state.go('scores');
          },
          'nextLevel': function () {
            instance.level += 1;
            console.log($state.current.data.mode);
            
            if ($state.current.data.mode == 'faces'){
	                $state.go('memorise');
	            }
	            else{
	                $state.go('memorisecar');
	            }
          }
        };

        return instance;
      });
})();
