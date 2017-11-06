var commands = require('./commands');
process.stdout.write('prompt > ');
process.stdin.on('data', function(data) {
	var cmd = data.toString().trim();
	if(cmd.includes('|')){
		var args = cmd.split(/\s*\|\s*/g);
	} else{
		var args = cmd.split(' ').slice(1).join(' ');
	}
	cmd = cmd.split(' ')[0];
	commands[cmd](args);
	process.stdout.write('\nprompt > ');
});