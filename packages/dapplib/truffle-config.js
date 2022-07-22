require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain minor inflict argue tackle total'; 
let testAccounts = [
"0x2d90756cbe2bdabe49c91b712b96de67e541fc143078d71d51651bd2d4885c70",
"0xf5666ad059c6cd426df6f8be32d32f8aac22edec45b0150a2ef4f9ba906cdb4c",
"0x52159dcee9268e9176a8454c11d93d393fda8ef8b2ae3148a87277baf571c974",
"0xa082a1bdb43001555fec8dcbfee98e8611a002ac2c8f495806c57f9af0b075a4",
"0xe1fb9f943dce3ba0237c9dcb8f8dd5ef4e9026e5f499735433707c4f4aea11b8",
"0x9884ec8371008a38fa8c7a68ce56a550d0d5893e718606bd64cfc7a455e84f80",
"0xf0b6cb71e8d0bcd9384f459ce8f715af55b7ba8f9e644b8bb5a006760c07c070",
"0x754b7f08868aca1dea73ff7d26e638692b1ef887697b351e486787ab017c298e",
"0x6fdf25c8a0e0416ebbfa5e4c4affccc5e65da108ab018a6f7c430c258a081c7e",
"0x802d3c9396e2e8501194ab38f870c4b91cb28ed02acef2ea71c24d4c9fe52055"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

