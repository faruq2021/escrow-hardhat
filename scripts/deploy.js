const { ethers } = require("hardhat");


async function main() {
 

  const escrow = await ethers.getContractFactory("Escrow");

  const arbiter = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const beneficiary = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"; 

  const escrowDeployment = await escrow.deploy(arbiter, beneficiary);
  await escrowDeployment.deployed();

  console.log("Your smart contract is deployed at", escrowDeployment.address);
}


main()
  .then(()=> process.exit(0))
  .catch((error) =>{
    console.error(error);
    process.exitCode= 1;
  });
  