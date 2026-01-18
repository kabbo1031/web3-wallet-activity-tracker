export function simulateTransaction(fromWallet, toWallet, amount) {
  console.log("Simulating transaction...");

  return {
    from: fromWallet.address,
    to: toWallet.address,
    amount: amount,
    txHash: "0xSIMTX123456789"
  };
}
