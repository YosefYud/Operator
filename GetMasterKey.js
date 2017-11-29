'use strict';

var secrets = require('secrets.js-grempe');
var clip = require('clipboardy');

var key1 = require('prompt-sync')()('Operator Key 1: ');
var key2 = require('prompt-sync')()('Operator Key 2: ');

 var keys = [key1, key2];
 var comb = secrets.combine(keys);
 clip.writeSync(comb);
 console.log('Master Key copied to clipboard!'); 