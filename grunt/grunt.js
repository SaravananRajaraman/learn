module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["build/*"],
        copy: {
            main: {
                files: [
                    {
                    expand: true,
                    src: ['css/**', 'images/**', 'img/**', 'js/**', 'app.js', 'index.html'],
                    dest: 'build/'
                }]
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'build/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'build/css/'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'build/js',
                    src: '**/*.js',
                    dest: 'build/js'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: ['**/*.html', '!about.html'], // Need to check my it's causing error
                    dest: 'build/'
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/'
                }]
            }
        },
        requirejs:{
            compile:{
                options:{
                    baseUrl:"js",
                    mainConfigFile:"js/config.js",
                    out:'build/min.js',
                    name:"main"
                }
            }
        }
    });
    // Load the plugin that provides the "clean" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Load the plugin that provides the "copy" task.
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Load the plugin that provides the "CSS Minifier" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Load the plugin that provides the "JS Minifier" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Load the plugin that provides the "HTML Minifier" task.
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // Load the plugin that provides the "Image Minifier" task.
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    //grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'uglify', 'htmlmin', 'imagemin']);

    //grunt.registerTask('default', ['clean']);

    grunt.registerTask('require', ['requirejs']);
}

//Support me @ http://www.amazon.in/registry/wishlist/XSDJNR21S2I7
