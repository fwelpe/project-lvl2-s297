import ASTconstruct from '../ASTconstruct';
import renderObjLike from './renderObjLike';
import renderPlain from './renderPlain';
import renderJSON from './renderJSON';

const render = (ast, format) => {
  switch (format) {
    case 'objLike':
      return renderObjLike(ast);
    case 'plain':
      return renderPlain(ast);
    case 'json':
      return renderJSON(ast);
    default:
      throw new Error(`Unknown format: '${format}'. Exit.`);
  }
};

export default (obj1, obj2, format) => `${render(ASTconstruct(obj1, obj2), format)}\n`;
