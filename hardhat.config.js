require("@nomicfoundation/hardhat-toolbox");


const QUICKNODE_HTTP_URL = "https://thrilling-proportionate-emerald.ethereum-goerli.discover.quiknode.pro/1e96b48574f9e3b868264a87c2cf5fcf06100e60/";
const PRIVATE_KEY = "0d882292bc9c2718a3fe4be39831ccefa8b9cf2a8a7257f32b718774b8ec3b7f";

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    }
  }
};
