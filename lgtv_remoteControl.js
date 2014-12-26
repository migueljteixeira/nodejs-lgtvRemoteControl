var readline = require('readline');
var requests = require('./requests.js');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

requests.requestPairingKey(function (callback) {
	// if the request was successful, continue
	if(callback)
		promptForPairingKey();
});

// Prompt user for pairing key
function promptForPairingKey() {
	rl.question("> Insert Pairing Key: ", function (pairingKey) {

		requests.requestPairing(pairingKey, function (pairingSucceeded) {

			// if pairing was successful, continue
			if(pairingSucceeded)
				promptForSessionID();
		});

	});
}

// Prompt user for session ID
function promptForSessionID() {
	rl.question("\n> Insert Session ID (shown above): ", function (sessionID) {

		promptForCommandKey(sessionID);
	});
}

// Prompt user for commandKey
function promptForCommandKey(sessionID) {
	rl.question("> Insert Command Key: ", function (commandKey) {
		
		requests.requestCommandKey(sessionID, commandKey);
		console.log('> OK.\n')

		promptForCommandKey(sessionID);
	});
}