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
    if (_.isObject(iterVal1) && _.isObject(iterVal2)) {
      const childrenAST = ASTconstruct(iterVal1, iterVal2);
      return { ...acc, [key]: { difference: 'objects', ...values, childrenAST } };
    }
    if (iterVal1 === iterVal2) {
      return { ...acc, [key]: { difference: 'same', ...values } };
    }
    return { ...acc, [key]: { difference: 'different', ...values } };
  };
  return arrOfUniqKeys.reduce(renderIter, {});
};

export default ASTconstruct;
