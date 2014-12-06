###**GruntJS** in simple steps

> NOTE:"Prerequisites"
>1. Basic Nodejs knowledge
>2. Command Line Interface knowledge

**Step:**

 1. Install [Node.js](http://nodejs.org/)  
 2. Install grunt by follow the steps. 
	 1. Move to project folder via CMD.  
	 2. Then type `npm install grunt --save -dev`.
 3. Make the package.json ([Ref](https://www.npmjs.org/doc/files/package.json.html)) or simple use `npm init` or create the file package.json file and make suer your package look like
 
        {
	      	"name": "name of your application",
	      	"version": "version code",
	      	"devDependencies": {
			"grunt": "^0.4.5"
	      	}
    	}

 
 4. Then make Gruntfile.js for operation you need or download the sample @ [Gruntfile.js](https://www.dropbox.com/s/edqtb6qvun78smt/Gruntfile.js?dl=0).   
 
 5. Install modules here we are going to use ( htmlmin,cssmin,uglify,etc,. )
	 6. Install the req modules via `npm install`. 
	 Yuo can see `grunt.loadNpmTasks('grunt-contrib-clean');` are the modules you see in Gruntfile.js
	 2. And finally run the `npm install grunt-contrib-*` 
	 Note: The * describe the modules you need.
 
 6. Finaly Run the `grunt` cmd you will get requirement in your Dest Folder
