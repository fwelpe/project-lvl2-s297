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
  // console.log(`__dirname = ${__dirname}`);
  // console.log(`path1 = ${path1}`);
  // console.log(`path2 = ${path2}`);
  var path1FileRead = _fs2.default.readFileSync(path1);
  var path1obj = JSON.parse(path1FileRead);
  var path2FileRead = _fs2.default.readFileSync(path2);
  var path2obj = JSON.parse(path2FileRead);
  var arrOfUniqKeys = _lodash2.default.union(Object.keys(path1obj), Object.keys(path2obj));
  // console.log(`arrOfUniqKeys = ${arrOfUniqKeys}`);
  var f = function f(acc, val) {
    if (path1obj[val] === path2obj[val]) {
      var caseEqual = '    ' + val + ': ' + path1obj[val] + '\n';
      return '' + acc + caseEqual;
    }
    var obj1Changes = _lodash2.default.has(path1obj, val) ? '  - ' + val + ': ' + path1obj[val] + '\n' : '';
    var obj2Changes = _lodash2.default.has(path2obj, val) ? '  + ' + val + ': ' + path2obj[val] + '\n' : '';
    return '' + acc + obj1Changes + obj2Changes;
  };
  var result = arrOfUniqKeys.reduce(f, '');
  var resultWithBrackets = '{\n' + result + '}\n';
  return resultWithBrackets;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYXRoMSIsInBhdGgyIiwicGF0aDFGaWxlUmVhZCIsImZzIiwicmVhZEZpbGVTeW5jIiwicGF0aDFvYmoiLCJKU09OIiwicGFyc2UiLCJwYXRoMkZpbGVSZWFkIiwicGF0aDJvYmoiLCJhcnJPZlVuaXFLZXlzIiwiXyIsInVuaW9uIiwiT2JqZWN0Iiwia2V5cyIsImYiLCJhY2MiLCJ2YWwiLCJjYXNlRXF1YWwiLCJvYmoxQ2hhbmdlcyIsImhhcyIsIm9iajJDaGFuZ2VzIiwicmVzdWx0IiwicmVkdWNlIiwicmVzdWx0V2l0aEJyYWNrZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQ0EsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLGdCQUFnQkMsYUFBR0MsWUFBSCxDQUFnQkosS0FBaEIsQ0FBdEI7QUFDQSxNQUFNSyxXQUFXQyxLQUFLQyxLQUFMLENBQVdMLGFBQVgsQ0FBakI7QUFDQSxNQUFNTSxnQkFBZ0JMLGFBQUdDLFlBQUgsQ0FBZ0JILEtBQWhCLENBQXRCO0FBQ0EsTUFBTVEsV0FBV0gsS0FBS0MsS0FBTCxDQUFXQyxhQUFYLENBQWpCO0FBQ0EsTUFBTUUsZ0JBQWdCQyxpQkFBRUMsS0FBRixDQUFRQyxPQUFPQyxJQUFQLENBQVlULFFBQVosQ0FBUixFQUErQlEsT0FBT0MsSUFBUCxDQUFZTCxRQUFaLENBQS9CLENBQXRCO0FBQ0E7QUFDQSxNQUFNTSxJQUFJLFNBQUpBLENBQUksQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdEIsUUFBSVosU0FBU1ksR0FBVCxNQUFrQlIsU0FBU1EsR0FBVCxDQUF0QixFQUFxQztBQUNuQyxVQUFNQyxxQkFBbUJELEdBQW5CLFVBQTJCWixTQUFTWSxHQUFULENBQTNCLE9BQU47QUFDQSxrQkFBVUQsR0FBVixHQUFnQkUsU0FBaEI7QUFDRDtBQUNELFFBQU1DLGNBQWNSLGlCQUFFUyxHQUFGLENBQU1mLFFBQU4sRUFBZ0JZLEdBQWhCLGFBQThCQSxHQUE5QixVQUFzQ1osU0FBU1ksR0FBVCxDQUF0QyxVQUEwRCxFQUE5RTtBQUNBLFFBQU1JLGNBQWNWLGlCQUFFUyxHQUFGLENBQU1YLFFBQU4sRUFBZ0JRLEdBQWhCLGFBQThCQSxHQUE5QixVQUFzQ1IsU0FBU1EsR0FBVCxDQUF0QyxVQUEwRCxFQUE5RTtBQUNBLGdCQUFVRCxHQUFWLEdBQWdCRyxXQUFoQixHQUE4QkUsV0FBOUI7QUFDRCxHQVJEO0FBU0EsTUFBTUMsU0FBU1osY0FBY2EsTUFBZCxDQUFxQlIsQ0FBckIsRUFBd0IsRUFBeEIsQ0FBZjtBQUNBLE1BQU1TLDZCQUEyQkYsTUFBM0IsUUFBTjtBQUNBLFNBQU9FLGtCQUFQO0FBQ0QsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAocGF0aDEsIHBhdGgyKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGBfX2Rpcm5hbWUgPSAke19fZGlybmFtZX1gKTtcbiAgLy8gY29uc29sZS5sb2coYHBhdGgxID0gJHtwYXRoMX1gKTtcbiAgLy8gY29uc29sZS5sb2coYHBhdGgyID0gJHtwYXRoMn1gKTtcbiAgY29uc3QgcGF0aDFGaWxlUmVhZCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoMSk7XG4gIGNvbnN0IHBhdGgxb2JqID0gSlNPTi5wYXJzZShwYXRoMUZpbGVSZWFkKTtcbiAgY29uc3QgcGF0aDJGaWxlUmVhZCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoMik7XG4gIGNvbnN0IHBhdGgyb2JqID0gSlNPTi5wYXJzZShwYXRoMkZpbGVSZWFkKTtcbiAgY29uc3QgYXJyT2ZVbmlxS2V5cyA9IF8udW5pb24oT2JqZWN0LmtleXMocGF0aDFvYmopLCBPYmplY3Qua2V5cyhwYXRoMm9iaikpO1xuICAvLyBjb25zb2xlLmxvZyhgYXJyT2ZVbmlxS2V5cyA9ICR7YXJyT2ZVbmlxS2V5c31gKTtcbiAgY29uc3QgZiA9IChhY2MsIHZhbCkgPT4ge1xuICAgIGlmIChwYXRoMW9ialt2YWxdID09PSBwYXRoMm9ialt2YWxdKSB7XG4gICAgICBjb25zdCBjYXNlRXF1YWwgPSBgICAgICR7dmFsfTogJHtwYXRoMW9ialt2YWxdfVxcbmA7XG4gICAgICByZXR1cm4gYCR7YWNjfSR7Y2FzZUVxdWFsfWA7XG4gICAgfVxuICAgIGNvbnN0IG9iajFDaGFuZ2VzID0gXy5oYXMocGF0aDFvYmosIHZhbCkgPyBgICAtICR7dmFsfTogJHtwYXRoMW9ialt2YWxdfVxcbmAgOiAnJztcbiAgICBjb25zdCBvYmoyQ2hhbmdlcyA9IF8uaGFzKHBhdGgyb2JqLCB2YWwpID8gYCAgKyAke3ZhbH06ICR7cGF0aDJvYmpbdmFsXX1cXG5gIDogJyc7XG4gICAgcmV0dXJuIGAke2FjY30ke29iajFDaGFuZ2VzfSR7b2JqMkNoYW5nZXN9YDtcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gYXJyT2ZVbmlxS2V5cy5yZWR1Y2UoZiwgJycpO1xuICBjb25zdCByZXN1bHRXaXRoQnJhY2tldHMgPSBge1xcbiR7cmVzdWx0fX1cXG5gO1xuICByZXR1cm4gcmVzdWx0V2l0aEJyYWNrZXRzO1xufTtcbiJdfQ==