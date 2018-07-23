import renderValue from './renderValue';

const renderPlain = (ast, parentArr = []) => {
  const ASTkeys = Object.keys(ast);
  const renderIter = (acc, key) => {
    const ASTnode = ast[key];
    const { difference } = ASTnode;
    const fullKey = [...parentArr, key].join('.');
    const beginning = `Property ${fullKey}`;
    const nodeValue1 = renderValue(ASTnode.value1, 'plain');
    const nodeValue2 = renderValue(ASTnode.value2, 'plain');
    switch (difference) {
      case 'same':
        return [...acc, `${beginning} was the same.`];
      case 'added':
        return [...acc, `${beginning} was added with ${nodeValue2}`];
      case 'removed':
        return [...acc, `${beginning} was removed.`];
      case 'different':
        return [...acc, `${beginning} was updated. From ${nodeValue1} to ${nodeValue2}`];
      case 'objects':
        return [...acc, renderPlain(ASTnode.childrenAST, [...parentArr, key])];
      default:
        throw new Error(`unknown difference: ${difference}. internal bug`);
    }
  };
  const renderedArr = ASTkeys.reduce(renderIter, []);
  return renderedArr.join('\n');
};

export default renderPlain;
