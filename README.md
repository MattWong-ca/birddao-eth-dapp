# 🪶 BirdDAO - A DAO for birdwatching enthusiasts
Live demo: [vercel link soon]

BirdDAO is a fully-functional DAO built for birdwatching ethusiasts. Connect your wallet and mint a membership NFT to join. On the dashboard, you can view a list of other members and vote on proposals!

Built with only JavaScript, leveraging the thirdweb SDK to deploy contracts. The frontend was built with React. A ERC-1155 token was deployed for the NFT membership, a ERC-20 token for the governance token, and governance contract for proposals + treasury.

### Get started
1. Clone this repo
2. Run `npm install` at the root of your directory
3. Run `npm start` to see it on localhost:3000

### To do
- Clean up landing page + dashboard UI
- Add `Add proposal` feature
- Disconnect wallet button + user's current network / address

# 📷 Screenshots

# 🔗 Links
- BirdDAO Membership Token (ERC-1155): [0x977d60DEe0c35e5418C7C4f76dec1578F72C70ae](https://goerli.etherscan.io/token/0x977d60DEe0c35e5418C7C4f76dec1578F72C70ae)
- BirdDAO Governance Token (ERC-20): [0xf5ad13e83eb41183a408e37f4ac41eb943e0d0f6](https://goerli.etherscan.io/token/0xf5ad13e83eb41183a408e37f4ac41eb943e0d0f6)
- BirdDAO Governance Contract: [0xDE89ff5C3ED5355037cD6089Fbef8014ad2e1Cf6](https://goerli.etherscan.io/address/0xDE89ff5C3ED5355037cD6089Fbef8014ad2e1Cf6)

# 🚧 Friction Log
- Had to run some scripts or click a button multiple times before it functioned as expected, not sure why previous attempts didn't work
- Needed to swtich from QuickNode --> Alchemy API to fix `eth_getLogs and eth_newFilter are limited to a 10,000 blocks range`