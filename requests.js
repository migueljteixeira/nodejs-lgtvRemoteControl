var dgram = require('dgram');
var http = require('http');
var net = require('net');

var address = '192.168.1.65';

// Scan for devices on localhost
function discover(callback) {
	var message_discovery = new Buffer(
		'M-SEARCH * HTTP/1.1\r\n' +
		'HOST: 239.255.255.250:1900\r\n' +
		'MAN: "ssdp:discover"\r\n' +
		'MX: 3\r\n' +
		'ST: urn:schemas-upnp-org:device:MediaRenderer:1\r\n\r\n');

	var client = dgram.createSocket("udp4");

	// send message
	client.send(message_discovery, 0, message_discovery.length, 1900, '239.255.255.250');

	client.on('message', function (msg, req_info) {
		callback(req_info);
	});

	client.on('error', function (error) {
		console.log('Error: ' + error);
	});
}

// Show pairing key on the TV screen
exports.requestPairingKey = function(callback) {
	var message_request = '<?xml version="1.0" encoding="utf-8"?>' +
		'<auth><type>AuthKeyReq</type></auth>';

	var options = {
		hostname : address,
		port : 8080,
		path : '/udap/api/pairing',
		method : 'POST'
	};

	// make HTTP request
	var req = http.request(options, function (res) {

		if(res.statusCode == 200) {
			console.log('> The Pairing Key is being displayed on the TV screen.')
			callback(true);
		}
		else {
			console.log('Error: ' + res.statusCode + ' (statusCode)');
			process.exit(1);
		}
	});

	req.on('error', function (error) {
		console.log('Error: ' + error);
	});

	req.setHeader('Content-Type', 'text/xml; charset=utf-8');
	req.end(message_request);
}

// Pair host with TV
exports.requestPairing = function(pairingKey, callback) {
	var message_request = '<?xml version="1.0" encoding="utf-8"?>' +
		'<auth><type>AuthReq</type><value>' +
		pairingKey + '</value></auth>';

	var options = {
		hostname : address,
		port : 8080,
		path : '/udap/api/pairing',
		method : 'POST'
	};

	// make HTTP request
	var req = http.request(options, function (res) {

		if(res.statusCode == 200) {
			console.log('\n> The Pairing request has succeeded.')

			res.on('data', function(data){
				console.log('> Response: ' + data);
				callback(true);
			});
		}
		else {
			console.log('Error: ' + res.statusCode + ' (statusCode)');
			process.exit(1);
		}
	});

	req.on('error', function (error) {
		console.log('Error: ' + error);
	});

	req.setHeader('Content-Type', 'text/xml; charset=utf-8');
	req.end(message_request);
}

// Handle command key to be sent to TV
exports.requestCommandKey = function(sessionID, commandKey) {
	var message_request = '<?xml version="1.0" encoding="utf-8"?><command><session>' +
		sessionID +
		"</session><type>HandleKeyInput</type><value>" +
		commandKey +
		"</value></command>"

	var options = {
		hostname : address,
		port : 8080,
		path : '/udap/api/command',
		method : 'POST'
	};

	// make HTTP request
	var req = http.request(options, function (res) {

		if(res.statusCode != 200) {
			console.log('Error: ' + res.statusCode + ' (statusCode)');
			process.exit(1);
		}
	});

	req.on('error', function (error) {
		console.log('Error: ' + error);
	});

	req.setHeader('Content-Type', 'text/xml; charset=utf-8');
	req.end(message_request);
}
