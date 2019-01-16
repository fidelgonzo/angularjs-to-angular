const ts = require('typescript');
const kind = ts.SyntaxKind;
const _ = require('lodash');

module.exports = function(ast) {
    const classes = ast.statements.filter(x=>x.kind === kind.ClassDeclaration);
    if(classes && classes.length > 0) {
        return _.find(classes, (cls) => {
            if(cls.name.escapedText.indexOf('Controller') > -1){
                return true;
            }
        });
    }
    return undefined;
};