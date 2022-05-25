var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');
const privateKeyString = <Your-private-Key>;
const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);
const wallet = Wallet['default'].fromPrivateKey(privateKeyBuffer);
const publicKey = wallet.getPublicKeyString();
console.log(publicKey);
const address = wallet.getAddressString();
console.log(address);
