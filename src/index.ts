import generate from '@babel/generator';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

const main = () => {
  const ast = parse(`
const a = 1
let b = 2
`);

  traverse(ast, {
    VariableDeclaration: (path) => {
      path.node.kind = 'var';
    },
  });
  console.log(generate(ast).code);
};

main();
