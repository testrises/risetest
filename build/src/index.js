"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var UserRoutes_1 = require("./Routes/UserRoutes");
var PostRoutes_1 = require("./Routes/PostRoutes");
// create express app
var app = express();
app.use(bodyParser.json());
app.use('/users', UserRoutes_1.default);
app.use('/posts', PostRoutes_1.default);
process
    .on('unhandledRejection', function (reason, p) {
    console.error(reason, 'Unhandled Rejection at Promise', p);
})
    .on('uncaughtException', function (err) {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
});
// start express server
app.listen(3000);
exports.default = app;
console.log("Express server has started ");
//# sourceMappingURL=index.js.map