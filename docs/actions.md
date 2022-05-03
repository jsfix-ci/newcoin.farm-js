***

# open

### Parameters:
* @param owner - owner of account balance    
* @param symbol - token symbol
* @param payer - payer of RAM       

### Description:

Creates 0 balance account in balances table.

### Required Authorization:

**payer** account.

***

# close

### Parameters:

* @param owner - owner of account balance    
* @param symbol - token symbol

### Description:

Close 0 balance account in balances table.

### Required Authorization:

**owner** account.

***

# unlock

### Parameters:

* @param from - owner of deposit balance    
* @param id - id of deposit

### Description:

Unlock locked tokens and send it back with yeild.

### Required Authorization:

**from** account.

***

# lockTokens

### Parameters:

* @param from - owner of account balance    
* @param quantity - token quantity

### Description:

Transfer and lock dao tokens to farm contract.

### Required Authorization:

**from** account.

***