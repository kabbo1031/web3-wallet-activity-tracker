export function generateReport(tx, wallets) {
  console.log("----- Wallet Activity Report -----");
  console.log("From:", tx.from);
  console.log("To:", tx.to);
  console.log("Amount:", tx.amount);
  console.log("Transaction Hash:", tx.txHash);

  wallets.forEach(wallet => {
    console.log("Wallet:", wallet.address, "Balance:", wallet.balance);
  });

  console.log("----------------------------------");
}
