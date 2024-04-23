mport { ethers } from "hardhat";

async function main() {
  const gateway = '0x995d4cf491660a7d6827cb9057fddf8c348db793'

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
