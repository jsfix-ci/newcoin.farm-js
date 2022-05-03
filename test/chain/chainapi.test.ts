import { doesNotMatch } from "assert";
import { expect } from "chai";
import ChainApi from "../../src/api/chain";
import {
  GetCurrencyStats,
  GetCurrencyBalance,
  GetTableRowsPayload,
  DepositPayload
} from "../../src/interfaces";

// tslint:disable-next-line:no-var-requires
const fetch = require("node-fetch");

describe("RPC API", () => {
  const api = new ChainApi("https://testnet.newcoin.org", "farm.nco", fetch);

  const exampleDeposit: DepositPayload = {
    id: "1",
    owner: "nco"
  };

  const exampleCurrency: GetCurrencyBalance = {
    code: "farm.nco",
    account: "nco",
    symbol: "FARM",
  };

  const exampleStats: GetCurrencyStats = {
    code: "farm.nco",
    symbol: "FARM",
  };

  it("fetch FARM token balance by account:" + exampleCurrency.account, async () => {
    const response = await api.getCurrencyBalance(exampleCurrency);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch FARM stats:", async () => {
    const response = await api.getCurrencyStats(exampleStats);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch deposit by id:" + exampleDeposit.id, async () => {
    const response = await api.getDeposit(exampleDeposit);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);
});
