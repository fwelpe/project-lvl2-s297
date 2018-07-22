import _ from 'lodash';

const ASTconstruct = (obj1, obj2) => {
  const arrOfUniqKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  const renderIter = (acc, key) => {
    const iterVal1 = obj1[key];
    const iterVal2 = obj2[key];
    const values = { value1: iterVal1, value2: iterVal2 };
    if (!_.has(obj1, key)) {
      return { ...acc, [key]: { difference: 'added', ...values } };
    }
    if (!_.has(obj2, key)) {
      return { ...acc, [key]: { difference: 'removed', ...values } };
    }
    const type1 = typeof iterVal1;
    const type2 = typeof iterVal2;
    if ((type1 === 'object') && (type2 === 'object')) {
      const childrenDiffAST = ASTconstruct(iterVal1, iterVal2);
      return { ...acc, [key]: { difference: 'objects', ...values, childrenDiff: childrenDiffAST } };
    }
    if (iterVal1 === iterVal2) {
      return { ...acc, [key]: { difference: 'same', ...values } };
    }
    return { ...acc, [key]: { difference: 'different', ...values } };
  };
  return arrOfUniqKeys.reduce(renderIter, {});
};

const renderSimpleObj = (obj, deeplvl) => {
  const indentation = '    '.repeat(deeplvl);
  const keys = Object.keys(obj);
  const renderedArr = keys.reduce((acc, key) => [...acc, `${indentation}    ${key}: ${obj[key]}`], []);
  return ['{', ...renderedArr, `${indentation}}`].join('\n');
};

const render = (AST, deeplvl = 0) => {
  const ASTkeys = Object.keys(AST);
  const indentation = '    '.repeat(deeplvl);
  const renderIter = (acc, key) => {
    const ASTnode = AST[key];
    const { difference } = ASTnode;
    const nodeValue1 = (typeof ASTnode.value1) === 'object' ? renderSimpleObj(ASTnode.value1, deeplvl + 1) : ASTnode.value1;
    const nodeValue2 = (typeof ASTnode.value2) === 'object' ? renderSimpleObj(ASTnode.value2, deeplvl + 1) : ASTnode.value2;
    const keyInObj1Removed = `${indentation}  - ${key}: ${nodeValue1}`;
    const keyInObj2Added = `${indentation}  + ${key}: ${nodeValue2}`;
    const equalValuesCase = `${indentation}    ${key}: ${nodeValue1}`;
    switch (difference) {
      case 'same':
        return [...acc, equalValuesCase];
      case 'different':
        return [...acc, keyInObj1Removed, keyInObj2Added];
      case 'added':
        return [...acc, keyInObj2Added];
      case 'removed':
        return [...acc, keyInObj1Removed];
      case 'objects':
        return [...acc, `${indentation}    ${key}: ${render(ASTnode.childrenDiff, deeplvl + 1)}`];
      default:
        console.log('something went wrong');
        return acc;
    }
  };
  const renderedArr = ASTkeys.reduce(renderIter, []);
  const renderedStr = ['{', ...renderedArr, `${indentation}}`].join('\n');
  return renderedStr;
};

export default (obj1, obj2) => `${render(ASTconstruct(obj1, obj2))}\n`;
