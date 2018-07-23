import _ from 'lodash';

const astConstruct = (obj1, obj2) => {
  const arrOfUniqKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  const renderIter = (key) => {
    // const obj1[key] = obj1[key];
    // const obj2[key] = obj2[key];
    // const values = { value1: obj1[key], value2: obj2[key] };
    if (!_.has(obj1, key)) {
      return { key, type: 'added', value2: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { key, type: 'removed', value1: obj1[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const children = astConstruct(obj1[key], obj2[key]);
      return { key, type: 'objects', children };
    }
    if (obj1[key] === obj2[key]) {
      return { key, type: 'same', value1: obj1[key] };
    }
    return {
      key,
      type: 'different',
      value1: obj1[key],
      value2: obj2[key],
    };
  };
  return arrOfUniqKeys.map(renderIter);
};

export default astConstruct;
