const Web3 = require('web3');

let web3 = null;
module.exports = {
    getWeb3Instance : function(){
        if (web3 === null) {
            web3 = new Web3();
            web3.setProvider(new Web3.providers.HttpProvider('https://ropsten.infura.io/b13e328e12fa4a1bb93c4097b7241e6e'));
        } 
        return web3;
    }
};
