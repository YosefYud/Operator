# BlockChainNodeJS
A BitcoinJS-lib testbed

Look in the BlockChainJS directory for examples

## Transaction Examples -
#### Each one of these example create a HEX string that can be broadcast on the Bitcoin Network using the following command on a local Bitcoin node or by using online tools
``` bash
bitcoin-cli -datadir=/data/bitcoindb/ -testnet sendrawtransaction <HEX string from examples>
```

### Example 1
#### Create signed transaction from WIF (CreateSignedTXFromWIF.js)
``` bash
bitcoin-cli -datadir=/data/bitcoindb/ -testnet dumpprivkey <Public Address>
```
This will give you the WIF for the address: <Public Address>
``` javascript
var keyPair = bitcoin.ECPair.fromWIF(WIF, testnet)
```
The keyPair is what you use to sign the transaction
``` javascript
var txb = new bitcoin.TransactionBuilder(testnet)
.....
txb.sign(0, keyPair)
```

### Example 2
#### Create signed transaction from Mnemonic (CreateSignedTxFromMneumonic.js)

Create a transaction and sign it from an address created from a Seed (in this example using Hard Coded mnemonic)

``` javascript
var mnemonic = 'enjoy oval noise drama repair purchase differ blade dress club pill mouse'
var seed3 = bip39.mnemonicToSeed(mnemonic)
var node3 = bitcoin.HDNode.fromSeedBuffer(seed3, testnet)
var child1 = node3.derivePath(path) //get child, should be able to do this specifing an index?
var addrs1 = child1.getAddress()
```

Use the keypair on child1 to sign the transaction

``` javascript
var txb = new bitcoin.TransactionBuilder(testnet)
.....
txb.sign(0, child1.keyPair)
```

### Example 3
#### Coming....