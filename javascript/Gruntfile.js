/* global module */
module.exports = function (grunt) {

  /*
   * Grunt tasks
   */

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-replace');

  /*
   * Config
   */

  grunt.initConfig({
    'clean': [
      'build/'
    ],

    /*
     * Env Vars
     */

    'replace': {
      'env': {
        'files': [{
          'expand': true,
          'flatten': true,
          'src': ['src/env.js'],
          'dest': 'build/'
        }]
      }
    },

    /*
     * Compile
     */

    'copy': {
      'appAssets': {
        'files': [{
          'src': [
            'app/html/**',
            'utils/**/*.html',
            'img/**',
            'fonts/**',
            '.htaccess'
          ],
          'dest': 'build/',
          'cwd': 'src/',
          'expand': true
        }]
      },

      'vendorAssets': {
        'files': [{
          'src': [
            'bower_components/font-awesome/fonts/*'
          ],
          'dest': 'build/fonts/',
          'cwd': '.',
          'expand': true,
          'flatten': true
        }]
      },

      'index': {
        'src': 'src/index.html',
        'dest': 'build/index.html',
        'cwd': '.',
        'options': {
          'process': function (contents) {
            return grunt.template.process(contents, {
              'data': {
                'version': grunt.config('pkg.version')
              }
            });
          }
        }
      }

    },

    'concat': {
      'options': {
        'sourceMap': false,
        'stripBanners': true
      },

      'buildVendorCss': {
        'src': [
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'bower_components/font-awesome/css/font-awesome.min.css'
        ],
        'nonull': true,
        'dest': 'build/vendor.css'
      },

      'buildAppCss': {
        'src': [
          'src/css/*'
        ],
        'nonull': true,
        'dest': 'build/app.css'
      },

      'buildImagePreloader': {
        'src': [
          'src/js/imagepreloader.js'
        ],
        'nonull': true,
        'dest': 'build/imagepreloader.js'
      },

      'buildVendorJs': {
        'src': [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/angular/angular.js',
          'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
          'bower_components/angular-translate/angular-translate.min.js',
          'bower_components/angular-timer/dist/angular-timer.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-cookies/angular-cookies.min.js',
          'bower_components/angular-ui-router/release/angular-ui-router.min.js',
          'bower_components/angular-aria/angular-aria.min.js',
          'bower_components/angular-sanitize/angular-sanitize.min.js',
          'bower_components/lodash/dist/lodash.min.js',
          'bower_components/moment/min/moment.min.js',
          'bower_components/moment-timezone/builds/moment-timezone.min.js'
        ],
        'nonull': true,
        'dest': 'build/vendor.js'
      },

      'buildAppJs': {
        'src': [
          'src/app/identiface.js',
          'src/app/identiface.config.js',
          'src/app/identiface.states.js',
          'src/app/identiface.translations.js',
          'src/app/authentication/*',
          'src/app/controllers/**',
          'src/app/services/*'
        ],
        'nonull': true,
        'dest': 'build/app.js'
      }

    },

    'cssmin': {
      'options': {
        'shorthandCompacting': false,
        'roundingPrecision': -1
      },
      'target': {
        'files': {
          'build/vendor.css': ['build/vendor.css'],
          'build/app.css': ['build/app.css'],
          'build/theme.css': ['build/theme.css']
        }
      }
    },
    'uglify': {
      'options': {
        'compress': {
          'drop_console': true
        },
        'mangle': false
      },
      'compile': {
        'files': {
          'build/vendor.js': 'build/vendor.js',
          'build/app.js': 'build/app.js'
        }
      }
    },

    /*
     * Watch
     */

    'watch': {

      'options': {'livereload': true},

      'gruntfile': {
        'files': 'Gruntfile.js',
        'options': {'livereload': false}
      },

      'concatbuildAppJs': {
        'files': [
          'src/app/**/*.js',
          'src/lib/**/*.js',
          'src/common/**/*.js'
        ],
        'tasks': [
          'concat:buildAppJs'
        ]
      },

      'copyAppAssets': {
        'files': ['src/**'],
        'tasks': ['copy:index', 'copy:appAssets']
      }
    }
  });

  /*
   * Alias
   */

  grunt.registerTask('default', [
    'build',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'replace:env',
    'concat:buildVendorCss',
    'concat:buildVendorJs',
    'concat:buildImagePreloader',
    'concat:buildAppCss',
    'concat:buildAppJs',
    'copy:index',
    'copy:vendorAssets',
    'copy:appAssets'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'uglify:compile',
    'cssmin'
  ]);

};
