## Mongo, Express, and Node Set Up

<img src="https://plus.unsplash.com/premium_photo-1658506952924-d3ebaeca8139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt="Mongo" width="350" />

### Setup

`npm i` for node_modules

`npx tsc --init` to manually install `tsconfig.json`

`.env` file: 
```JavaScript
URI= "Mongo Uri..."
ORIGIN= ["Website URL..."]
```

`npm run test index.test.ts` for testing
***

_dotenv_

`dotenv` accepts env variables
(config/config.ts)

```JavaScript
import * as dotenv from 'dotenv'
```

_cookie-parser_

`cookie-parser` sends user information to browser

```JavaScript
const cookieParser = require('cookie-parser')
```
