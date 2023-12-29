const { ethers } = require("hardhat")
const networkConfig = {
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
        callbackGasLimit: "500000", // 500,000
        interval: "60", // 60 sec
    },
    11155111: {
        name: "sepolia",
        vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 150 gwei key hash
        subscriptionId: "7829", // subId on sepolia testnet vrf.chain.link
        callbackGasLimit: "500000", // 500,000
        interval: "60", // 1 min
    },
    80001: {
        name: "mumbai",
        vrfCoordinatorV2: "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f", // 500 gwei key hash
        subscriptionId: "6850", // subId on mumbai testnet vrf.chain.link
        callbackGasLimit: "500000", // 500,000
        interval: "60", // 1 min
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
