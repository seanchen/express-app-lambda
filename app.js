'use strict'

const app = require("./core/express")();

// app.listen(3000) // <-- comment this line out from your app
module.exports = app // export your app so aws-serverless-express can use it
