
const hre = require("hardhat");

async function main() {
  const { ethers } = hre;

  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with:", deployer.address);

  const LeaseContract = await ethers.getContractFactory("LeaseContract");

  const tenant = "0x000000000000000000000000000000000000dead";
  const rent = ethers.utils.parseEther("0.1");
  const deposit = ethers.utils.parseEther("0.05");

  const contract = await LeaseContract.deploy(tenant, rent, deposit);
  await contract.deployed();

  console.log("LeaseContract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
