var readline = require('readline');
var requests = require('./requests.js');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Prompt user for pairing key
function promptForPairingKey(callback){
	rl.question("> Insert Pairing Key: ", function (answer) {
		callback(answer);
	});
}

// Prompt user for session ID
function promptForSessionID(callback){
	rl.question("\n> Insert Session ID (shown above): ", function (answer) {
		callback(answer);
	});
}

// Prompt user for commandKey
function promptForCommandKey(callback){
	rl.question("> Insert Command Key: ", function (answer) {
		callback(answer);
		rl.close();
	});
}


requests.requestPairingKey(function (callback){

	// if the request was successful, continue
	if(callback){
		promptForPairingKey(function (pairingKey){

			requests.requestPairing(pairingKey, function (pairingSucceeded){

				// if pairing was successful, continue
				if(pairingSucceeded){
					promptForSessionID(function (sessionID){

						promptForCommandKey(function (commandKey){

							requests.requestCommandKey(sessionID, commandKey);
						});
					});
				}

			});
		});
	}

});