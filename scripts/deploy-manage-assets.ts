import hre from "hardhat"
import fs from "fs"
import { Contract, ContractFactory } from "ethers"

async function main() {
    console.log("Deploying Manage Assets...")

    const ManageAssetsFactory: ContractFactory = await hre.ethers.getContractFactory("ManageAssets")
    const manageAssetsContract: Contract = await ManageAssetsFactory.deploy()

    await manageAssetsContract.deployed()

    console.log("ManageAssets deployed to:", manageAssetsContract.address)
    console.log(`https://ropsten.etherscan.io/address/${manageAssetsContract.address}`)

    fs.writeFileSync(".deployment.manage-assets.json", JSON.stringify({ address: manageAssetsContract.address }))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => {
        process.exit(0)
    })
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
