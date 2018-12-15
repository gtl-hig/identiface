(function () {
  'use strict';
  /* global angular */


  angular
    .module('identiface')
    .config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('en', {
        'TITLE': 'The Image identification game!',
        'INSTRUCTIONS': 'This game is designed to help you learn how to be a good observer of the world around you. ',
        'STARTGAME': 'Start game',
        'STORYTITLE': 'Instructions',
        'STORYTEXT': 'You have two categories currently.  Can you remember faces or cars. The faster and more accurate you are the better.  Initial levels are just picking the answer, later level require more advanced memory  ',
        'PLAYNOW': 'Play Now',
        'LEVEL': 'Level',
        'MEMORISE': 'Remember the face',
        'MEMORISEFACE': 'Remember this face',
        'MEMORISECAR': 'Remember this car',
        'STARTNOW': 'I am ready. Let\'s go!',
        'SELECTMSG': 'Which one is it?',
        'CORRECT': 'Correct!',
        'WRONG': 'Wrong!',
        'SCORECORRECT': 'Score:',
        'SCOREWRONG': 'That was the right answer:',
        'CORRECTMSG': 'The next level will be more difficult. Can you do it?',
        'WRONGMSG': 'Hint: Pay attention to the person\'s nose, eyes, and chin.',
        'WRONGMSGFACE': 'Hint: Pay attention to the person\'s nose, eyes, and chin.',
        'WRONGMSGCAR': 'Hint: Pay attention to make, dents, and shape',
        'PLAYLEVEL': 'Play Level',
        'PLAYAGAIN': 'Play Again',
        'ENDOFDEMO': 'Well done... Ready to try again!',
        'COMPLETE': 'complete',
        'CONGRATS': 'Congratulations!',
        'ENDGAMEMSG': 'You have completed the game',
        'TOPSCORES': 'Add your score to Top Scores',
        'FB': 'Share your score on Facebook',
        'OF': 'of'
      });

      $translateProvider.translations('es', {
        'TITLE': 'El juego de identificación de la cara!',
        'INSTRUCTIONS': '¿Cómo jugar? Es muy sencillo!'
                        + ' Se le mostrará una cara de dibujos animados, y memorizarla'
                        + ' a continuación, tratar de identificar cuando encubierta, entre'
                        + ' varias otras caras.',
        'STARTGAME': 'Empezar juego',
        'STORYTITLE': 'El Siete',
        'STORYTEXT': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac purus sed felis congue tristique. Donec sodales enim eros, a porta est tempor at. Nulla sapien enim, pharetra ac fermentum non, feugiat a odio. Vestibulum imperdiet facilisis rutrum.',
        'PLAYNOW': 'Jugar',
        'LEVEL': 'Nivel',
        'MEMORISE': 'Memoriza la cara',
        'STARTNOW': 'Estoy listo. ¡Vamonos!',
        'SELECTMSG': "¿Cuál es?",
        'CORRECT': 'Correcto!',
        'WRONG': 'Incorrecto!',
        'SCORECORRECT': 'Score:',
        'SCOREWRONG': 'Esa era la persona adecuada:',
        'CORRECTMSG': 'El siguiente nivel será más difícil. ¿Puedes hacerlo?',
        'WRONGMSG': 'Sugerencia: Preste atención a la persona\'s nariz, los ojos y la barbilla',
        'PLAYLEVEL': 'Juego de nivel',
        'PLAYAGAIN': 'Volver a jugar',
        'ENDOFDEMO': 'Fines de demostración... Gracias!',
        'COMPLETE': 'completo',
        'CONGRATS': '¡Felicitaciones!',
        'ENDGAMEMSG': 'Ha completado la demo',
        'TOPSCORES': 'Añadir tu puntuación a Top Scores',
        'FB': 'Comparte tu puntuación en Facebook',
        'OF': 'de'
      });

      $translateProvider.translations('el', {
        'TITLE': 'Το παιχνίδι αναγνώρισης προσώπων!',
        'INSTRUCTIONS': 'Πώς παίζεται; Είναι πολύ απλό!'
                        + ' Θα δείτε ένα σκίτσο προσώπου, απομνημονεύστε το'
                        + ' και προσπαθήστε να το αναγνωρίσετε όταν είναι'
                        + ' μεταμφιεσμένο, μεταξύ αρκετών άλλων προσώπων.',
        'STARTGAME': 'Start game',
        'STORYTITLE': 'The Seven',
        'STORYTEXT': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac purus sed felis congue tristique. Donec sodales enim eros, a porta est tempor at. Nulla sapien enim, pharetra ac fermentum non, feugiat a odio. Vestibulum imperdiet facilisis rutrum.',
        'PLAYNOW': 'Είμαι έτοιμος. Ας παίξουμε!',
        'LEVEL': 'Επίπεδο',
        'MEMORISE': 'Απομνημόνευσε το πρόσωπο',
        'STARTNOW': 'Ξεκίνα!',
        'SELECTMSG': 'Επίλεξε το σωστό πρόσωπο',
        'CORRECT': 'Σωστό!',
        'WRONG': 'Λάθος!',
        'SCORECORRECT': 'Σκορ:',
        'SCOREWRONG': 'Αυτό ήταν το σωστό:',
        'CORRECTMSG': 'Το επόμενο επίπεδο θα έιναι πιο δύσκολο. Μπορείς;',
        'WRONGMSG': 'Hint: Επικεντρώσου στα μάτια, τη μύτη και το πηγούνι.',
        'PLAYLEVEL': 'Παίξε το Επίπεδο',
        'PLAYAGAIN': 'Παίξε Ξανά',
        'ENDOFDEMO': 'Τέλος Demo... Ευχαριστούμε!',
        'COMPLETE': 'ολοκληρώθηκε',
        'CONGRATS': 'Συγχαρητήρια!',
        'ENDGAMEMSG': 'Ολοκληρώσατε το demo',
        'TOPSCORES': 'Προσθέστε το σκορ σας στα Top Scores',
        'FB': 'Κάντε share το σκορ σας στο Facebook',
        'OF': 'από'
      });

      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy(null);
    }]);

})();
