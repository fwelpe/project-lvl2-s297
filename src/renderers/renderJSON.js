const renderJSON = (ast) => {
  const ASTkeys = Object.keys(ast);
  const renderIter = (acc, key) => {
    const ASTnode = ast[key];
    const { difference } = ASTnode;
    const nodeValue1 = ASTnode.value1;
    const nodeValue2 = ASTnode.value2;
    const keyInObj1Removed = { removed: nodeValue1 };
    const keyInObj2Added = { added: nodeValue2 };
    const equalValuesCase = { same: nodeValue1 };
    switch (difference) {
      case 'same':
        return { ...acc, equalValuesCase };
      case 'different':
        return { ...acc, ...keyInObj1Removed, ...keyInObj2Added };
      case 'added':
        return { ...acc, ...keyInObj2Added };
      case 'removed':
        return { ...acc, ...keyInObj1Removed };
      case 'objects':
        return { ...acc, key: renderJSON(ASTnode.childrenAST) };
      default:
        throw new Error(`unknown difference: ${difference}. internal bug`);
    }
  };
  const rendered = ASTkeys.reduce(renderIter, {});
  return JSON.stringify(rendered, null, ' ');
};

export default renderJSON;
