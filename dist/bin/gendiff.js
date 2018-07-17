#!/usr/bin/env node
'use strict';

var _commander = require('../commander');

var _commander2 = _interopRequireDefault(_commander);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

_commander2.default.parse(process.argv);
console.log(_2.default.apply(undefined, _toConsumableArray(_commander2.default.args)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vZ2VuZGlmZi5qcyJdLCJuYW1lcyI6WyJjb21tYW5kZXIiLCJwYXJzZSIsInByb2Nlc3MiLCJhcmd2IiwiY29uc29sZSIsImxvZyIsImdlbmRpZmYiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUFBLG9CQUFVQyxLQUFWLENBQWdCQyxRQUFRQyxJQUF4QjtBQUNBQyxRQUFRQyxHQUFSLENBQVlDLCtDQUFXTixvQkFBVU8sSUFBckIsRUFBWiIsImZpbGUiOiJnZW5kaWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY29tbWFuZGVyIGZyb20gJy4uL2NvbW1hbmRlcic7XG5pbXBvcnQgZ2VuZGlmZiBmcm9tICcuLi8nO1xuXG5jb21tYW5kZXIucGFyc2UocHJvY2Vzcy5hcmd2KTtcbmNvbnNvbGUubG9nKGdlbmRpZmYoLi4uY29tbWFuZGVyLmFyZ3MpKTtcbiJdfQ==