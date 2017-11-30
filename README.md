# Operator
A Utility for Operator functions

## Install
``` bash
npm install
```

## Get Master Key
##### Provide two of the six operator keys and the Common Operator Master Key is copied to your clipboard
``` bash
node GetMasterKey.js
```

## Save Crypt File
##### Provide two of the six operator keys and the Private Key you want to save and it saves it to the file system
``` bash
node SaveCrypt.js

C:\Data\Git\Operator>node SaveCrypt.js
Operator Key 1: 804d0bc9585c...0ed3ec8fc9baf
Operator Key 2: 8035c71a6aad...bfb01f62360ba
Private Key: 0xAe338ce25c4E233...
Private Key data save to file:C:\Data\Git\Operator/AES.txt
```

## Load Crypt File
##### Provide two of the six operator keys and the Private Key is loaded from the file system and copied to the clipboard
``` bash
node LoadCrypt.js

C:\Data\Git\Operator>node LoadCrypt.js
Operator Key 1: 804d0bc9585c...0ed3ec8fc9baf
Operator Key 2: 8035c71a6aad...bfb01f62360ba
Private Key data written to clip:
```


## Generate Seed
##### Generate a seed Mnemonic sentence and then copy it to the clipboard and to a file
``` bash
node GenSeed.js

C:\Data\Git\Operator>node GenSeed.js
Mnemonic written to clip and filename: C:\Data\Git\Operator/Mnemonic.txt
```