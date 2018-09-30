const Web3 = require('web3');
var HDWalletProvider = require("truffle-hdwallet-provider");

var provider = function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/b13e328e12fa4a1bb93c4097b7241e6e")
      };

let web3 = null;
module.exports = {
    getWeb3Instance : function(){
        if (web3 === null) {
            web3 = new Web3();
            web3.setProvider(provider);
        } 
        return web3;
    }
};
