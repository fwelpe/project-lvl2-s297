import _ from 'lodash';

const complexCheck = value => (_.isObject(value) ? 'complex value' : `'${value}'`);

const renderPlain = (ast, parentArr = []) => {
  const astKeys = Object.keys(ast);
  const renderIter = (key) => {
    const astNode = ast[key];
    const { difference } = astNode;
    const fullKeyArr = [...parentArr, key];
    const beginning = `Property ${fullKeyArr.join('.')}`;
    // const nodeValue1 = renderValue(astNode.value1, 'plain');
    // const nodeValue2 = renderValue(astNode.value2, 'plain');
    switch (difference) {
      case 'same':
        return `${beginning} was the same.`;
      case 'added':
        return `${beginning} was added with ${complexCheck(astNode.value2)}`;
      case 'removed':
        return `${beginning} was removed.`;
      case 'different':
        return `${beginning} was updated. From ${complexCheck(astNode.value1)} to ${complexCheck(astNode.value2)}`;
      case 'objects':
        return renderPlain(astNode.childrenAST, fullKeyArr);
      default:
        throw new Error(`unknown difference: ${difference}. internal bug`);
    }
  };
  const renderedArr = astKeys.map(renderIter);
  return renderedArr.join('\n');
};

export default renderPlain;
