require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    amoy: {
      url: "https://polygon-amoy.infura.io/v3/6a401463202a41ebadfc142438dcb82e",
      accounts: [PRIVATE_KEY]
    }
  }
};

