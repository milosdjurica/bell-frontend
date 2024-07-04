# Installation

1. Clone the repository

```bash
git clone https://github.com/milosdjurica/bell-frontend
cd bell-frontend
```

2. Install dependencies

```bash
yarn
```

# Connect with smart contract and run frontend

1. Deploy contract as described here -> https://github.com/milosdjurica/bell-solidity#readme
2. Add contract address in .env like this

```
NEXT_PUBLIC_STORE_CONTRACT_ADDRESS="0x23aDbdD0427175b3A0ab11cE76B3865bcB578A61"

```

3. Start the development server

```bash
yarn dev
```

4. Interact with smart contract

