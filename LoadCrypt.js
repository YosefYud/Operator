'use strict';

var fs = require('fs');
var secrets = require('secrets.js-grempe');
var CryptoJS = require("crypto-js");
var clip = require('clipboardy');

var CryptFileName = __dirname + '/AES.txt'

if (!fs.existsSync(CryptFileName)) {
	console.log("Cannot find Crypt file:" + CryptFileName);
}
else {
	var key1 = require('prompt-sync')()('Operator Key 1: ');
	var key2 = require('prompt-sync')()('Operator Key 2: ');
	
	var keys = [key1, key2];
    var comb = secrets.combine(keys);
    var ciphertext = fs.readFileSync(CryptFileName, 'utf8');
    
    var bytes = CryptoJS.AES.decrypt(ciphertext, comb);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    clip.writeSync(plaintext);
    console.log("Private Key data written to clip:");
}