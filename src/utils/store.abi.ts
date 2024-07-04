export const storeAbi = [
  {
    type: "function",
    name: "getNote",
    inputs: [{ name: "id_", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "storeNote",
    inputs: [{ name: "note_", type: "string", internalType: "string" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;
