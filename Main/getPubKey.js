var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');
const privateKeyString = '0x9fdbe4e81e07e1f314b3af6b24f953ae60b6ec732f3f425ebe25463b3e544c08';
const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);
const wallet = Wallet['default'].fromPrivateKey(privateKeyBuffer);
const publicKey = wallet.getPublicKeyString();
console.log(publicKey);
const address = wallet.getAddressString();
console.log(address);