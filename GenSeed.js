'use strict';

var fs = require('fs');
var clip = require('clipboardy');
var bip39 = require('bip39');

var MnemonicFileName = __dirname + '/Mnemonic.txt'

if (fs.existsSync(MnemonicFileName)) {
	console.log("Cannot write to file, it already exists:" + MnemonicFileName);
}
else {
	var mnemonic = bip39.generateMnemonic(256);
	clip.writeSync(mnemonic);
	fs.writeFileSync(MnemonicFileName, mnemonic); //in production this will be sent to printer (broken into 4) and not saved to local file system
	console.log("Mnemonic written to clip and filename: " + MnemonicFileName);
}