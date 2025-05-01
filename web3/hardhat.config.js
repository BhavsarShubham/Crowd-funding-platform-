require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/BBCd-3A4kMWn19yYoP7-2Nn_dMfZmXl9",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 11155111,
    },
    // Uncomment if you want zkSync networks:
    // zksync_testnet: {
    //   url: "https://zksync2-testnet.zksync.dev",
    //   ethNetwork: "goerli",
    //   chainId: 280,
    //   zksync: true,
    // },
    // zksync_mainnet: {
    //   url: "https://zksync2-mainnet.zksync.io/",
    //   ethNetwork: "mainnet",
    //   chainId: 324,
    //   zksync: true,
    // },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  // Optional paths:
  // paths: {
  //   artifacts: "./artifacts-zk",
  //   cache: "./cache-zk",
  //   sources: "./contracts",
  //   tests: "./test",
  // },
};
