'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (path1, path2) {
  var path1FileRead = _fs2.default.readFileSync(path1);
  var path1obj = JSON.parse(path1FileRead);
  var path2FileRead = _fs2.default.readFileSync(path2);
  var path2obj = JSON.parse(path2FileRead);
  var arrOfUniqKeys = _lodash2.default.union(Object.keys(path1obj), Object.keys(path2obj));
  var f = function f(acc, val) {
    if (path1obj[val] === path2obj[val]) {
      acc.push('    ' + val + ': ' + path1obj[val]);
      return acc;
    }
    if (_lodash2.default.has(path1obj, val)) {
      acc.push('  - ' + val + ': ' + path1obj[val]);
    }
    if (_lodash2.default.has(path2obj, val)) {
      acc.push('  + ' + val + ': ' + path2obj[val]);
    }
    return acc;
  };
  var result = arrOfUniqKeys.reduce(f, ['{']);
  result.push('}\n');
  return result.join('\n');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYXRoMSIsInBhdGgyIiwicGF0aDFGaWxlUmVhZCIsImZzIiwicmVhZEZpbGVTeW5jIiwicGF0aDFvYmoiLCJKU09OIiwicGFyc2UiLCJwYXRoMkZpbGVSZWFkIiwicGF0aDJvYmoiLCJhcnJPZlVuaXFLZXlzIiwiXyIsInVuaW9uIiwiT2JqZWN0Iiwia2V5cyIsImYiLCJhY2MiLCJ2YWwiLCJwdXNoIiwiaGFzIiwicmVzdWx0IiwicmVkdWNlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUVlLFVBQUNBLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMvQixNQUFNQyxnQkFBZ0JDLGFBQUdDLFlBQUgsQ0FBZ0JKLEtBQWhCLENBQXRCO0FBQ0EsTUFBTUssV0FBV0MsS0FBS0MsS0FBTCxDQUFXTCxhQUFYLENBQWpCO0FBQ0EsTUFBTU0sZ0JBQWdCTCxhQUFHQyxZQUFILENBQWdCSCxLQUFoQixDQUF0QjtBQUNBLE1BQU1RLFdBQVdILEtBQUtDLEtBQUwsQ0FBV0MsYUFBWCxDQUFqQjtBQUNBLE1BQU1FLGdCQUFnQkMsaUJBQUVDLEtBQUYsQ0FBUUMsT0FBT0MsSUFBUCxDQUFZVCxRQUFaLENBQVIsRUFBK0JRLE9BQU9DLElBQVAsQ0FBWUwsUUFBWixDQUEvQixDQUF0QjtBQUNBLE1BQU1NLElBQUksU0FBSkEsQ0FBSSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN0QixRQUFJWixTQUFTWSxHQUFULE1BQWtCUixTQUFTUSxHQUFULENBQXRCLEVBQXFDO0FBQ25DRCxVQUFJRSxJQUFKLFVBQWdCRCxHQUFoQixVQUF3QlosU0FBU1ksR0FBVCxDQUF4QjtBQUNBLGFBQU9ELEdBQVA7QUFDRDtBQUNELFFBQUlMLGlCQUFFUSxHQUFGLENBQU1kLFFBQU4sRUFBZ0JZLEdBQWhCLENBQUosRUFBMEI7QUFDeEJELFVBQUlFLElBQUosVUFBZ0JELEdBQWhCLFVBQXdCWixTQUFTWSxHQUFULENBQXhCO0FBQ0Q7QUFDRCxRQUFJTixpQkFBRVEsR0FBRixDQUFNVixRQUFOLEVBQWdCUSxHQUFoQixDQUFKLEVBQTBCO0FBQ3hCRCxVQUFJRSxJQUFKLFVBQWdCRCxHQUFoQixVQUF3QlIsU0FBU1EsR0FBVCxDQUF4QjtBQUNEO0FBQ0QsV0FBT0QsR0FBUDtBQUNELEdBWkQ7QUFhQSxNQUFNSSxTQUFTVixjQUFjVyxNQUFkLENBQXFCTixDQUFyQixFQUF3QixDQUFDLEdBQUQsQ0FBeEIsQ0FBZjtBQUNBSyxTQUFPRixJQUFQLENBQVksS0FBWjtBQUNBLFNBQU9FLE9BQU9FLElBQVAsQ0FBWSxJQUFaLENBQVA7QUFDRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXRoMSwgcGF0aDIpID0+IHtcbiAgY29uc3QgcGF0aDFGaWxlUmVhZCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoMSk7XG4gIGNvbnN0IHBhdGgxb2JqID0gSlNPTi5wYXJzZShwYXRoMUZpbGVSZWFkKTtcbiAgY29uc3QgcGF0aDJGaWxlUmVhZCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoMik7XG4gIGNvbnN0IHBhdGgyb2JqID0gSlNPTi5wYXJzZShwYXRoMkZpbGVSZWFkKTtcbiAgY29uc3QgYXJyT2ZVbmlxS2V5cyA9IF8udW5pb24oT2JqZWN0LmtleXMocGF0aDFvYmopLCBPYmplY3Qua2V5cyhwYXRoMm9iaikpO1xuICBjb25zdCBmID0gKGFjYywgdmFsKSA9PiB7XG4gICAgaWYgKHBhdGgxb2JqW3ZhbF0gPT09IHBhdGgyb2JqW3ZhbF0pIHtcbiAgICAgIGFjYy5wdXNoKGAgICAgJHt2YWx9OiAke3BhdGgxb2JqW3ZhbF19YCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBpZiAoXy5oYXMocGF0aDFvYmosIHZhbCkpIHtcbiAgICAgIGFjYy5wdXNoKGAgIC0gJHt2YWx9OiAke3BhdGgxb2JqW3ZhbF19YCk7XG4gICAgfVxuICAgIGlmIChfLmhhcyhwYXRoMm9iaiwgdmFsKSkge1xuICAgICAgYWNjLnB1c2goYCAgKyAke3ZhbH06ICR7cGF0aDJvYmpbdmFsXX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gYXJyT2ZVbmlxS2V5cy5yZWR1Y2UoZiwgWyd7J10pO1xuICByZXN1bHQucHVzaCgnfVxcbicpO1xuICByZXR1cm4gcmVzdWx0LmpvaW4oJ1xcbicpO1xufTtcbiJdfQ==