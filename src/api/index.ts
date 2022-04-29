import {
  GetCurrencyStats,
  GetCurrencyBalance,
  GetTableRowsPayload,
} from "../interfaces/chain.interface";
import { DepositPayload } from "../interfaces/deposit.interface";

export default class RpcApi {
  readonly nodeos_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(nodeos_url: string, contract: string, fetch: any) {
    this.nodeos_url = nodeos_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getCurrencyStats(payload: GetCurrencyStats): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_currency_stats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getCurrencyBalance(payload: GetCurrencyBalance): Promise<any> {
    return await this.fetch(
      `${this.nodeos_url}/v1/chain/get_currency_balance`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getDeposit(opts: DepositPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: opts.owner,
      table: "deposits",
      table_key: opts.id,
      lower_bound: opts.id,
      upper_bound: opts.id,
      key_type: "i64",
      index_position: "1",
    });
  }
}
