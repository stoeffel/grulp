#!/usr/bin/env node
require('shelljs/global');
var fs = require('fs')

fs.open('./gulpfile.js', 'r', function(err) {
	if (err) {
		fs.open('./Gruntfile.js', 'r', function(err) {
			if (err) {
				console.error('No gulp and no grunt');
			} else {
				runTaskrunner('grunt');
			}
		});
	} else {
		runTaskrunner('gulp');
	}
});

function runTaskrunner(name) {
  var cmd = [name].concat(process.argv.slice(2)).join(' ');
	exec(cmd);
}
