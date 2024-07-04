"use client";

import { useState } from "react";
import { storeContract, web3 } from "../utils/web3";

export default function Page() {
  const [note, setNote] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [fetchedNote, setFetchedNote] = useState<string>("");

  const handleFetchNote = async () => {
    if (!id) return;
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      const account = accounts[0];
      const note = await storeContract.methods
        .getNote(Number(id))
        .call({ from: account });
      console.log(note);
      setFetchedNote(note);
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  const handleStoreNote = async () => {
    if (!note) return;
    try {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[3];
      await storeContract.methods.storeNote(note).send({ from: account });
      alert("Note stored successfully!");
    } catch (error) {
      console.error("Error storing note:", error);
    }
  };

  return (
    <div>
      <h1>Note App</h1>
      <div>
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button onClick={handleStoreNote}>Store Note</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleFetchNote}>Get Note</button>
        {fetchedNote && <p>Fetched Note: {fetchedNote}</p>}
      </div>
    </div>
  );
}
