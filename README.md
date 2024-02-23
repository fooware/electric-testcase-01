# Welcome to your ElectricSQL app!

## Setup

```sh
yarn
yarn backend:up
yarn db:migrate
yarn client:generate
yarn dev

```

## Run test
- Open at least two tabs / browsers
- Load test app in the tabs (probably <http://127.0.0.1:5173/>)
- Press `Start adding stuff` in one or more tab.
- Open the console in one of the tabs you didn't start adding stuff in.
- While stuff is getting added, press `Remove everything` in that tab.
- Pressing it multiple times increases the chance of bug reproduction.

It is "expected" that you will get a Foreign Key constraint error in the tab you pressed `Remove everything` and that tab will stop syncing properly.

Now each time you reload that tab you will get an error logged to the console, and no updated data. Something along the lines of:
```JavaScript
[...]
electric-sql_wa-sqlite.js?v=362f2bda:3177 apply incoming changes for LSN: MTAyMjMyNzY4
electric-sql_wa-sqlite.js?v=362f2bda:3177 apply incoming changes for LSN: MTAyMjM1MjQw
electric-sql_wa-sqlite.js?v=362f2bda:3177 apply incoming changes for LSN: MTAyMjY5NDMy
electric-sql_wa-sqlite.js?v=362f2bda:3177 apply incoming changes for LSN: MTAyMjcxNjI0
electric-sql_wa-sqlite.js?v=362f2bda:3177 apply incoming changes for LSN: MTAyMjczODE2
electric-sql_wa-sqlite.js?v=362f2bda:3177 apply incoming changes for LSN: MTAyNzYxMDA4
electric-sql_wa-sqlite.js?v=362f2bda:3177 apply incoming changes for LSN: MTAyNzk5NjY0
sqlite-api.js?v=362f2bda:857 Uncaught (in promise) Error: FOREIGN KEY constraint failed
    at check (sqlite-api.js?v=362f2bda:857:11)
    at Object.step (sqlite-api.js?v=362f2bda:690:14)
    at async _n.execSql (electric-sql_wa-sqlite.js?v=362f2bda:2209:14)
    at async _n.exec (electric-sql_wa-sqlite.js?v=362f2bda:2199:14)
    at async n.runInTransaction (electric-sql_wa-sqlite.js?v=362f2bda:2120:13)
    at async he._applyTransaction (electric-sql_wa-sqlite.js?v=362f2bda:3199:117)
    at async EventEmitter.<anonymous> (electric-sql_wa-sqlite.js?v=362f2bda:3614:7)
[...]
```
