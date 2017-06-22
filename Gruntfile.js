"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");

  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]})
          ]
        },
        src: "build/css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "csso"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);

  grunt.initConfig({
    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            ".html"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      } 
    }
  });

  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": ["less/style.less"]
        }
      }
    }
  });

  grunt.initConfig({
    svgstore: {
      options: {
        svg: {
          style: "display: none"
        }
      },
      symbols: {
        files: {
          "build/img/symbols.svg": ["img/icons/*.svg"]
        }
      }
    }
  });

  grunt.initConfig({
    svgmin: {
      symbols: {
        files: [{
          expand: true,
            src: ["build/img/icons/*.svg"]
        }]
      }
    }
  });

  grunt.initConfig({
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
            progressive: true
        },
        files: [{
          expand: true,
            src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    }
  });

  grunt.registerTask("symbols", ["svgmin", "svgstore"]);
    grunt.registerTask("build", [
      "clean",
      "copy",
      "less",
      "postcss",
      "csso",
      "symbols",
      "imagemin"
    ]);
};
