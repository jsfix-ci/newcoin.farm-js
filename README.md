# newcoin.farm-js

JS Library to interact with newcoin.farm smart contract.

## Usage

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm i @newcoin-foundation/newcoin.farm-js
```

### Initialize

Web library can be found in the [dist] folder.

```javascript
// Standard import
const { ActionGenerator, RpcApi } = require("newcoinfarm");

// ES6 import
import { ActionGenerator, RpcApi } from "newcoinfarm";
```

## Documentation

### ChainApi

Uses only native nodeos calls to chain api plugin.

### ActionGenerator

Helper class to construct contract actions which can be signed and pushed to chain with eosjs. 

Detailed information about each action can be found [here](docs/actions.md).