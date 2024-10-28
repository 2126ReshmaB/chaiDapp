import React from 'react';
import { ethers } from "ethers";

const Buy = ({ state }) => {
  const buyChai = async (e) => {
    e.preventDefault();
    
    const { contract } = state;
    if (!contract) {
      console.error("Contract is undefined");
      return;
    }

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    try {
      const amount = { value: ethers.utils.parseEther("0.000") };
      const transaction = await contract.buyChai(name, message, amount);
      await transaction.wait();
      console.log("Transaction is Successful");
      window.location.reload();
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <form onSubmit={buyChai} style={{ width: "100%", maxWidth: "400px" }}>
        <div style={{ marginTop: "16px" ,display: "flex"}}>
          <label htmlFor="name" style={{ display: "block", color: "#ffffff",marginRight: "8px"}}>Name:</label>
          <input
            id="name"
            type="text"
            style={{
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              padding: "8px",
              color: "#4a4a4a",
              outline: "none"
            }}
            placeholder="Enter your name"
            required
          />
        </div>
        <div style={{ marginTop: "16px", marginBottom: "16px" ,display: "flex"}}>
          <label htmlFor="message" style={{ display: "block", color: "#ffffff", marginRight: "8px" }}>Message:</label>
          <textarea
            id="message"
            style={{
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              padding: "8px",
              color: "#4a4a4a",
              outline: "none"
            }}
            placeholder="Your message"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#4299e1",
            color: "#ffffff",
            fontWeight: "bold",
            padding: "10px 14px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            outline: "none",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#2b6cb0"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#4299e1"}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default Buy;
