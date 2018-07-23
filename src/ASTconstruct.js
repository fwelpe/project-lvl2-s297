import _ from 'lodash';

const astConstruct = (obj1, obj2) => {
  const arrOfUniqKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  const renderIter = (acc, key) => {
    // const obj1[key] = obj1[key];
    // const obj2[key] = obj2[key];
    // const values = { value1: obj1[key], value2: obj2[key] };
    if (!_.has(obj1, key)) {
      return { ...acc, [key]: { difference: 'added', value2: obj2[key] } };
    }
    if (!_.has(obj2, key)) {
      return { ...acc, [key]: { difference: 'removed', value1: obj1[key] } };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const children = astConstruct(obj1[key], obj2[key]);
      return { ...acc, [key]: { difference: 'objects', children } };
    }
    if (obj1[key] === obj2[key]) {
      return { ...acc, [key]: { difference: 'same', value1: obj1[key] } };
    }
    return { ...acc, [key]: { difference: 'different', value1: obj1[key], value2: obj2[key] } };
  };
  return arrOfUniqKeys.reduce(renderIter, {});
};

export default astConstruct;
