const hre = require("hardhat");

async function main() {
  const MediSync = await hre.ethers.deployContract("MediSync");
  await MediSync.waitForDeployment();
  console.log("MediSync deployed to:", MediSync.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
