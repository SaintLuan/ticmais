require('custom-env').env()

//server.js
const cli = require('next/dist/cli/next-start');
console.log(process.env.PORT)
cli.nextStart(['-p', process.env.PORT || 3000]);