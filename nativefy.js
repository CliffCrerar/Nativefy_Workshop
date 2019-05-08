const cp = require("child_process");
const path = require("path");
const process = require("process");
const fs = require('fs');
const moment = require('moment')

/*
	nativefier -n <app output name> <url> <savepath>
*/

// const appName = process.argv[3];
// const url = process.argv[2];
// const savePath = path.join(__dirname, "nativefied", appName);

function nativefy(appName, url, savePath) {

	const command = `nativefier -n ${appName} ${url} ${savePath}`;
	fs.appendFileSync(
		path.join(__dirname, 'logs', 'nativefyrunlog.log'),
		`[${moment().format('DD-MMM-YYYY : HH:mm:ss')}] - ` + command + '\n\n', 'utf8'
	)
	console.log(`
		#-------------------------------------------#
		#       RUNNGING NATIVEFY WORKSHOP APP        #
		#-------------------------------------------#
		`);

	console.log("\nExecuting command: \n \n #->", command, "\n \n");

	const nativefy = cp.exec(command);
	//console.log("nativefy: ", nativefy);

	nativefy.stdout.on("data", msg => {
		console.log("msg OUT: ", msg);
	});

	nativefy.stdin.on("data", msg => {
		console.log("msg IN: ", msg);
	});

	nativefy.stderr.on("data", msg => {
		console.log("msg ERR: ", msg);
	});

	nativefy.stdout.on("end", () => {
		console.log("#----------- COMPLETED ------------#");
	});

}

module.exports = nativefy;