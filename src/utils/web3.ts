import Web3 from "web3";
import { storeAbi } from "./store.abi";

if (typeof process.env.NEXT_PUBLIC_STORE_CONTRACT_ADDRESS === "undefined") {
  throw new Error(
    "Contract address is not defined. Please set NEXT_PUBLIC_STORE_CONTRACT_ADDRESS in .env file."
  );
}

const storeContractAddress = process.env.NEXT_PUBLIC_STORE_CONTRACT_ADDRESS;

const ganacheProvider = new Web3.providers.HttpProvider(
  "http://127.0.0.1:7545"
);

const web3 = new Web3(ganacheProvider);
const storeContract = new web3.eth.Contract(storeAbi, storeContractAddress);

export { web3, storeContract };
