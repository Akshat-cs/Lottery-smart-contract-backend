const { developmentChains } = require("../helper-hardhat-config")
const { ethers } = require("hardhat")

const BASE_FEE = ethers.utils.parseEther("0.25") // 0.25 is the premium. It costs 0.25 LINK per request.
const GAS_PRICE_LINK = 1e9 // 1000000000 // calculated value based on the gas price of the chain

// Eth price incrs to $1,000,000,000
// Chainlink nodes pay the gas fees to give us the randomness & do external execution
// So the price of requests change based on the price of gas

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deployiong mocks...")
        // Deploy a mock vrfcoordinator...
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks deployed!")
        log("--------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
