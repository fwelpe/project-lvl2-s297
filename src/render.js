import ASTconstruct from './ASTconstruct';

const renderValue = (value, format, deeplvl) => {
  if ((typeof value) !== 'object') {
    if (format === 'plain') {
      return `'${value}'`;
    }
    return `${value}`;
  }
  if (format === 'plain') {
    return 'complex value';
  }
  const indentation = '    '.repeat(deeplvl);
  const keys = Object.keys(value);
  const renderedArr = keys.reduce((acc, key) => [...acc, `${indentation}    ${key}: ${value[key]}`], []);
  return ['{', ...renderedArr, `${indentation}}`].join('\n');
};

const renderObjLike = (AST, deeplvl = 0) => {
  const ASTkeys = Object.keys(AST);
  const indentation = '    '.repeat(deeplvl);
  const renderIter = (acc, key) => {
    const ASTnode = AST[key];
    const { difference } = ASTnode;
    const nodeValue1 = renderValue(ASTnode.value1, 'objLike', deeplvl + 1);
    const nodeValue2 = renderValue(ASTnode.value2, 'objLike', deeplvl + 1);
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
        return [...acc, `${indentation}    ${key}: ${renderObjLike(ASTnode.childrenAST, deeplvl + 1)}`];
      default:
        console.log('something went wrong');
        return acc;
    }
  };
  const renderedArr = ASTkeys.reduce(renderIter, []);
  const renderedStr = ['{', ...renderedArr, `${indentation}}`].join('\n');
  return renderedStr;
};

const renderPlain = (AST, parentArr = []) => {
  const ASTkeys = Object.keys(AST);
  const renderIter = (acc, key) => {
    const ASTnode = AST[key];
    const { difference } = ASTnode;
    const beginning = 'Property ';
    const nodeValue1 = renderValue(ASTnode.value1, 'plain');
    const nodeValue2 = renderValue(ASTnode.value2, 'plain');
    const fullKey = [...parentArr, key].join('.');
    switch (difference) {
      case 'same':
        return [...acc, `${beginning}${fullKey} was the same.`];
      case 'added':
        return [...acc, `${beginning}${fullKey} was added with ${nodeValue2}`];
      case 'removed':
        return [...acc, `${beginning}${fullKey} was removed.`];
      case 'different':
        return [...acc, `${beginning}${fullKey} was updated. From ${nodeValue1} to ${nodeValue2}`];
      case 'objects':
        return [...acc, renderPlain(ASTnode.childrenAST, [...parentArr, key])];
      default:
        console.log('something went wrong');
        return acc;
    }
  };
  const renderedArr = ASTkeys.reduce(renderIter, []);
  return renderedArr.join('\n');
};

const render = (AST, format) => {
  if (format === 'plain') {
    return renderPlain(AST);
  }
  return renderObjLike(AST);
};

export default (obj1, obj2, format) => `${render(ASTconstruct(obj1, obj2), format)}\n`;
