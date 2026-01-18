import { connectRPC } from "./rpc.client.js";
import { loadWallets } from "./wallet.registry.js";
import { simulateTransaction } from "./transaction.simulator.js";
import { updateBalances } from "./balance.tracker.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Wallet Activity Tracker");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const wallets = loadWallets();

const txResult = simulateTransaction(wallets[0], wallets[1], 50);
const balances = updateBalances(wallets, txResult);

generateReport(txResult, balances);
