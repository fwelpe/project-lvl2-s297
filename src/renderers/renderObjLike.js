import _ from 'lodash';

const renderValue = (value, deeplvl) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const indentation = '    '.repeat(deeplvl);
  const keys = Object.keys(value);
  const renderedArr = keys.reduce((acc, key) => [...acc, `${indentation}    ${key}: ${value[key]}`], []);
  return ['{', ...renderedArr, `${indentation}}`].join('\n');
};

const prerenderArr = (ast, deeplvl = 0) => {
  // const astKeys = Object.keys(ast);
  const indentation = '    '.repeat(deeplvl);
  const renderIter = (astNode) => {
    // const astNode = ast[key];
    const { type, key } = astNode;
    const nodeValue1 = renderValue(astNode.value1, deeplvl + 1);
    const nodeValue2 = renderValue(astNode.value2, deeplvl + 1);
    // const keyInObj1Removed = `${indentation}  - ${key}: ${nodeValue1}`;
    // const keyInObj2Added = `${indentation}  + ${key}: ${nodeValue2}`;
    // const equalValuesCase = `${indentation}    ${key}: ${nodeValue1}`;
    switch (type) {
      case 'same':
        return `${indentation}    ${key}: ${nodeValue1}`;
      case 'different':
        return [`${indentation}  - ${key}: ${nodeValue1}`, `${indentation}  + ${key}: ${nodeValue2}`];
      case 'added':
        return `${indentation}  + ${key}: ${nodeValue2}`;
      case 'removed':
        return `${indentation}  - ${key}: ${nodeValue1}`;
      case 'objects':
        return [`${indentation}    ${key}: {`, prerenderArr(astNode.children, deeplvl + 1), `${indentation}    }`];
      default:
        throw new Error(`unknown type: ${type}. internal bug`);
    }
  };
  const renderedArr = ast.map(renderIter);
  // const renderedStr = _.flattenDeep(renderedArr).join('\n');
  return renderedArr;
};

const renderObjLike = ast => _.flattenDeep(['{', prerenderArr(ast), '}']).join('\n');

export default renderObjLike;
