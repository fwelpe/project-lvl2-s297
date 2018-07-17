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
  var resultWithBrackets = '{\n' + result + '}';
  console.log(resultWithBrackets);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5kaWZmLmpzIl0sIm5hbWVzIjpbInBhdGgxIiwicGF0aDIiLCJwYXRoMUZpbGVSZWFkIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJwYXRoMW9iaiIsIkpTT04iLCJwYXJzZSIsInBhdGgyRmlsZVJlYWQiLCJwYXRoMm9iaiIsImFyck9mVW5pcUtleXMiLCJfIiwidW5pb24iLCJPYmplY3QiLCJrZXlzIiwiZiIsImFjYyIsInZhbCIsImNhc2VFcXVhbCIsIm9iajFDaGFuZ2VzIiwiaGFzIiwib2JqMkNoYW5nZXMiLCJyZXN1bHQiLCJyZWR1Y2UiLCJyZXN1bHRXaXRoQnJhY2tldHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQ0EsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLGdCQUFnQkMsYUFBR0MsWUFBSCxDQUFnQkosS0FBaEIsQ0FBdEI7QUFDQSxNQUFNSyxXQUFXQyxLQUFLQyxLQUFMLENBQVdMLGFBQVgsQ0FBakI7QUFDQSxNQUFNTSxnQkFBZ0JMLGFBQUdDLFlBQUgsQ0FBZ0JILEtBQWhCLENBQXRCO0FBQ0EsTUFBTVEsV0FBV0gsS0FBS0MsS0FBTCxDQUFXQyxhQUFYLENBQWpCO0FBQ0EsTUFBTUUsZ0JBQWdCQyxpQkFBRUMsS0FBRixDQUFRQyxPQUFPQyxJQUFQLENBQVlULFFBQVosQ0FBUixFQUErQlEsT0FBT0MsSUFBUCxDQUFZTCxRQUFaLENBQS9CLENBQXRCO0FBQ0E7QUFDQSxNQUFNTSxJQUFJLFNBQUpBLENBQUksQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdEIsUUFBSVosU0FBU1ksR0FBVCxNQUFrQlIsU0FBU1EsR0FBVCxDQUF0QixFQUFxQztBQUNuQyxVQUFNQyxxQkFBbUJELEdBQW5CLFVBQTJCWixTQUFTWSxHQUFULENBQTNCLE9BQU47QUFDQSxrQkFBVUQsR0FBVixHQUFnQkUsU0FBaEI7QUFDRDtBQUNELFFBQU1DLGNBQWNSLGlCQUFFUyxHQUFGLENBQU1mLFFBQU4sRUFBZ0JZLEdBQWhCLGFBQThCQSxHQUE5QixVQUFzQ1osU0FBU1ksR0FBVCxDQUF0QyxVQUEwRCxFQUE5RTtBQUNBLFFBQU1JLGNBQWNWLGlCQUFFUyxHQUFGLENBQU1YLFFBQU4sRUFBZ0JRLEdBQWhCLGFBQThCQSxHQUE5QixVQUFzQ1IsU0FBU1EsR0FBVCxDQUF0QyxVQUEwRCxFQUE5RTtBQUNBLGdCQUFVRCxHQUFWLEdBQWdCRyxXQUFoQixHQUE4QkUsV0FBOUI7QUFDRCxHQVJEO0FBU0EsTUFBTUMsU0FBU1osY0FBY2EsTUFBZCxDQUFxQlIsQ0FBckIsRUFBd0IsRUFBeEIsQ0FBZjtBQUNBLE1BQU1TLDZCQUEyQkYsTUFBM0IsTUFBTjtBQUNBRyxVQUFRQyxHQUFSLENBQVlGLGtCQUFaO0FBQ0QsQyIsImZpbGUiOiJnZW5kaWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXRoMSwgcGF0aDIpID0+IHtcbiAgLy8gY29uc29sZS5sb2coYF9fZGlybmFtZSA9ICR7X19kaXJuYW1lfWApO1xuICAvLyBjb25zb2xlLmxvZyhgcGF0aDEgPSAke3BhdGgxfWApO1xuICAvLyBjb25zb2xlLmxvZyhgcGF0aDIgPSAke3BhdGgyfWApO1xuICBjb25zdCBwYXRoMUZpbGVSZWFkID0gZnMucmVhZEZpbGVTeW5jKHBhdGgxKTtcbiAgY29uc3QgcGF0aDFvYmogPSBKU09OLnBhcnNlKHBhdGgxRmlsZVJlYWQpO1xuICBjb25zdCBwYXRoMkZpbGVSZWFkID0gZnMucmVhZEZpbGVTeW5jKHBhdGgyKTtcbiAgY29uc3QgcGF0aDJvYmogPSBKU09OLnBhcnNlKHBhdGgyRmlsZVJlYWQpO1xuICBjb25zdCBhcnJPZlVuaXFLZXlzID0gXy51bmlvbihPYmplY3Qua2V5cyhwYXRoMW9iaiksIE9iamVjdC5rZXlzKHBhdGgyb2JqKSk7XG4gIC8vIGNvbnNvbGUubG9nKGBhcnJPZlVuaXFLZXlzID0gJHthcnJPZlVuaXFLZXlzfWApO1xuICBjb25zdCBmID0gKGFjYywgdmFsKSA9PiB7XG4gICAgaWYgKHBhdGgxb2JqW3ZhbF0gPT09IHBhdGgyb2JqW3ZhbF0pIHtcbiAgICAgIGNvbnN0IGNhc2VFcXVhbCA9IGAgICAgJHt2YWx9OiAke3BhdGgxb2JqW3ZhbF19XFxuYDtcbiAgICAgIHJldHVybiBgJHthY2N9JHtjYXNlRXF1YWx9YDtcbiAgICB9XG4gICAgY29uc3Qgb2JqMUNoYW5nZXMgPSBfLmhhcyhwYXRoMW9iaiwgdmFsKSA/IGAgIC0gJHt2YWx9OiAke3BhdGgxb2JqW3ZhbF19XFxuYCA6ICcnO1xuICAgIGNvbnN0IG9iajJDaGFuZ2VzID0gXy5oYXMocGF0aDJvYmosIHZhbCkgPyBgICArICR7dmFsfTogJHtwYXRoMm9ialt2YWxdfVxcbmAgOiAnJztcbiAgICByZXR1cm4gYCR7YWNjfSR7b2JqMUNoYW5nZXN9JHtvYmoyQ2hhbmdlc31gO1xuICB9O1xuICBjb25zdCByZXN1bHQgPSBhcnJPZlVuaXFLZXlzLnJlZHVjZShmLCAnJyk7XG4gIGNvbnN0IHJlc3VsdFdpdGhCcmFja2V0cyA9IGB7XFxuJHtyZXN1bHR9fWA7XG4gIGNvbnNvbGUubG9nKHJlc3VsdFdpdGhCcmFja2V0cyk7XG59O1xuIl19