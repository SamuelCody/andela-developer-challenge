'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _products = require('./routes/products');

var _products2 = _interopRequireDefault(_products);

var _sales = require('./routes/sales');

var _sales2 = _interopRequireDefault(_sales);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _categories = require('./routes/categories');

var _categories2 = _interopRequireDefault(_categories);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config(); // server.js

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

// Parse incoming requests data
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_products2.default);
app.use(_sales2.default);
app.use(_users2.default);
app.use(_categories2.default);

var server = app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});

exports.default = server;