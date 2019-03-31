const cp = require("child_process");
const path = require("path");
const process = require("process");

/*
	nativefier -n <app output name> <url> <savepath>
*/
const appName = process.argv[3];
const url = process.argv[2];
const savePath = path.join(__dirname, "nativefied", appName);

const command = `nativefier -n ${appName} ${url} ${savePath}`;
console.log(`
#-------------------------------------------#
#       RUNNGING NATIFY WORKSHOP APP        #
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
