import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xf82562226179A5e32D4278e7d0057137a4A955C0", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "BirdDAO Pin",
        description: "This NFT will give you access to BirdDAO!",
        image: readFileSync("scripts/assets/birddao-pin.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();