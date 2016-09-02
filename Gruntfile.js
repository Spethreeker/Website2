module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		
		cssmin: {
		my_target: {
			files:[{
				expand: true,
				cwd: 'css/',
				src: ['*.css', '!*.min.css'],
				dest: 'css/',
				ext: '.min.css'

			}]
			
		}
	}
});

	

	//load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//Default task
	grunt.registerTask('default', ['cssmin']);
};