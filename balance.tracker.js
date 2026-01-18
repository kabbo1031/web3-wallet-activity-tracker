export function updateBalances(wallets, tx) {
  wallets.forEach(wallet => {
    if (wallet.address === tx.from) {
      wallet.balance -= tx.amount;
    }
    if (wallet.address === tx.to) {
      wallet.balance += tx.amount;
    }
  });

  return wallets;
}
