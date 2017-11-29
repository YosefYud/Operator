'use strict';

var fs = require('fs');
var secrets = require('secrets.js-grempe');
var CryptoJS = require("crypto-js");

var CryptFileName = __dirname + '/AES.txt'

if (fs.existsSync(CryptFileName)) {
	console.log("Cannot write to file, it already exists:" + CryptFileName);
}
else {
	var key1 = require('prompt-sync')()('Operator Key 1: ');
	var key2 = require('prompt-sync')()('Operator Key 2: ');
	var PKey = require('prompt-sync')()('Private Key: ');

	var keys = [key1, key2];
	var comb = secrets.combine(keys);
	var ciphertext = CryptoJS.AES.encrypt(PKey, comb);

	fs.writeFileSync(CryptFileName, ciphertext);
	console.log("Private Key data save to file:" + CryptFileName);
}