export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string, readonly pools_contract: string) {}

  async open(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string,
    payer: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "open", {
      owner,
      symbol,
      payer
    });
  }

  async close(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "close", {
      owner,
      symbol
    });
  }

  async unlock(
    authorization: EosioAuthorizationObject[],
    from: string,
    id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "unlock", {
      from,
      id
    });
  }

  async lockTokens(
    authorization: EosioAuthorizationObject[],
    from: string,
    quantity: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.pools_contract, authorization, "transfer", {
      from: from,
      to: this.contract,
      quantity: quantity,
      memo: "lock"
    });
  }

  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
