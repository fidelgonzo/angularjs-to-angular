const ts = require('typescript');
const kind = ts.SyntaxKind;
const _ = require('lodash');

module.exports = function(ast) {
    const classes = ast.statements.filter(x => x.kind === kind.ClassDeclaration);
    const componentClass = classes[0];

    let name = componentClass.name.text;

    if(_.endsWith(name, 'Directive')){
        name = name.split('Directive')[0];
    }

    if (name.indexOf('Component') === -1) {
        name += 'Component';
    }

    return name;
};