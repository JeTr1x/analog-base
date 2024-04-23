import { ethers } from "hardhat";

async function main() {
  const gateway = '0x8707449d207997d0050e6e938f3b03d6162d2568'

  const lock = await ethers.deployContract("Counter", [gateway] );

  await lock.waitForDeployment();

  console.log(
    `Counter deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
