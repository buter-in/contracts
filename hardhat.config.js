require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337
    },
    mainnet: {
      chainId: 1,
      url: "http://15.204.161.234:8545",
      accounts: [process.env.SBT_DEPLOYER_PRIVATE_KEY]
    },
    bnbtestnet: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s2.binance.org:8545",
      accounts: [process.env.SBT_DEPLOYER_PRIVATE_KEY],
    },
    polytestnet: {
      chainId: 80001,
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [process.env.SBT_DEPLOYER_PRIVATE_KEY],
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [{
      version: "0.8.7",
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "london",
    }],
  },
};