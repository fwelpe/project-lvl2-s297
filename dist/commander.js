'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _commander2.default.command('-h').command('gendiff <firstConfig> <secondConfig>').option('-V, --version', 'output the version number').option('-f, --format [type]', 'Output format').description('Compares two configuration files and shows a difference.');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kZXIuanMiXSwibmFtZXMiOlsiY29tbWFuZGVyIiwiY29tbWFuZCIsIm9wdGlvbiIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlQSxvQkFDWkMsT0FEWSxDQUNKLElBREksRUFFWkEsT0FGWSxDQUVKLHNDQUZJLEVBR1pDLE1BSFksQ0FHTCxlQUhLLEVBR1ksMkJBSFosRUFJWkEsTUFKWSxDQUlMLHFCQUpLLEVBSWtCLGVBSmxCLEVBS1pDLFdBTFksQ0FLQSwwREFMQSxDIiwiZmlsZSI6ImNvbW1hbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21tYW5kZXIgZnJvbSAnY29tbWFuZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZGVyXG4gIC5jb21tYW5kKCctaCcpXG4gIC5jb21tYW5kKCdnZW5kaWZmIDxmaXJzdENvbmZpZz4gPHNlY29uZENvbmZpZz4nKVxuICAub3B0aW9uKCctViwgLS12ZXJzaW9uJywgJ291dHB1dCB0aGUgdmVyc2lvbiBudW1iZXInKVxuICAub3B0aW9uKCctZiwgLS1mb3JtYXQgW3R5cGVdJywgJ091dHB1dCBmb3JtYXQnKVxuICAuZGVzY3JpcHRpb24oJ0NvbXBhcmVzIHR3byBjb25maWd1cmF0aW9uIGZpbGVzIGFuZCBzaG93cyBhIGRpZmZlcmVuY2UuJyk7XG4iXX0=