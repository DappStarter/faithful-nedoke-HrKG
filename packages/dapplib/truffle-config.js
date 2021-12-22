require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember smile good kitten sun gasp'; 
let testAccounts = [
"0x745bcdefb0438973c327cf7d09e43928eff140d26858d4e75a9d6a9a98c5bac8",
"0x20ca6bcf40bc4242d8aa6e447aaa42a68338f9b6a68f1d04604aee844374bc22",
"0x72057719315c9044d8c494146e91fe00487dd501ff83a9eb5ec287f9ce3f7213",
"0xd389443c87720e13ada7d6f40724c7afb48b97047205cecf3c79fff213257e2d",
"0x9d5097aafc42502096a2a0be0fac07eb9f2af44448caec1a7b318f50c03b4cbf",
"0x51881a2a11d3f16abd354741a08bf7c0f656c5c159725728305261f666007d92",
"0xaad43c15ecc0e1097cd36de8da689caaa0b8c06241f5d2696d0eb34044023243",
"0x089c27a01175d64615e46fcc9a62722bec09b6ca476559f41ce6cf3b1a6b01ff",
"0x850280c151f0a8688dfe0b816e6ba58b92f811d221ae75f5fc8faccc0572ba89",
"0x9e85f75e2547c13f13df02ee56d9b26d4cbeae7cc3f2c6c1517b6113a8590240"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


