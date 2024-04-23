import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
        compilers: [
      {
        version: "0.8.19"
      },
      {
        version: "0.8.20"
      }
    ]
  },
  networks: {
    "sepolia": {
       url: "https://1rpc.io/sepolia",
       accounts: [process.env.PRIVATE_KEY as string],
       gasPrice: 1500000000,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "abc"
    },
    customChains: [
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL:"https://eth-sepolia.blockscout.com/api",
          browserURL: "https://eth-sepolia.blockscout.com/",
        }
      }
    ]
  },
  defaultNetwork: 'sepolia',
};

export default config;
