var fs = require('fs');
var request = require('request');
module.exports = {
	pwd: function(file){
		var output = process.stdout.write(process.cwd().toString());
		return output;
	},
	date: function(file){
		var date = new Date();
		 var output = process.stdout.write(date.toString());
		 return output;
	},
	ls: function(file){
		fs.readdir('.', function(err, files) {
  		if (err) throw err;
  		files.forEach(function(file) {
    	process.stdout.write(file.toString() + "\n");
  			});
  		process.stdout.write("prompt > ");
		});
	},
	echo: function(file){
		console.log(file);
	},
	cat: function(file){
		fs.readFile(file, function(err, data){
			if(err) throw err;
			console.log(data.toString());
			process.stdout.write("prompt > ");
		});
	},
	head: function(file){
		fs.readFile(file, function(err, data){
			if(err) throw err;
			var lines = data.toString().trim().split('\n');
			for(var i =0; i < 5; i++){
				console.log(lines[i] + '\n');
			}
			process.stdout.write("prompt > ");
		});
	}, 
	tail: function(file){
		fs.readFile(file, function(err, data){
			if(err) throw err;
			var lines = data.toString().trim().split('\n');
			for(var i = lines.length -6; i < lines.length; i++){
				console.log(lines[i] + '\n');
			}
			process.stdout.write("prompt > ");
		});
	},
	sort: function(file){
		fs.readFile(file, function(err, data){
			if(err) throw err;
			var lines = data.toString().trim().split('\n').sort();
			for(var i =0; i < lines.length; i++){
				console.log(lines[i] + '\n');
			}
			process.stdout.write("prompt > ");
		});
	},
	wc: function(file){
		fs.readFile(file, function(err, data){
			if(err) throw err;
			var lines = data.toString().trim().split('\n');
			console.log(lines.length);
			process.stdout.write("prompt > ");
		});
	},
	uniq: function(file) {
        fs.readFile(file, function(err, data) {
            if(err) throw err;
            var lines = data.toString().trim().split('\n').sort();
            var final= '';
            for(var i = 0; i < lines.length-1; i++) {
                if(lines[i] !== lines[i+1]) {
                    final += (lines[i] + '\n')
                }  
            }
            console.log(final)
            console.log("prompt > ");
        });
    },
    curl: function(file){
		request('http://www.google.com', function (error, response, body) {
  		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		console.log('body:', body); // Print the HTML for the Google homepage.
  		console.log("prompt > ");
		});
    }




};