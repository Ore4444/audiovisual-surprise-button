import babel from 'rollup-plugin-babel'
import esformatter from 'rollup-plugin-esformatter'
import sass from 'rollup-plugin-sass'
import cleanup from 'rollup-plugin-cleanup'

export default {
    format: 'iife',
    entry: 'src/js/index.js',
    dest: 'index.js',
    external: [],
    interop: true,
    plugins: [
        babel({
            exclude: ['**/*.scss']
        }),
        esformatter({
            indent: {
                value: '    ',
            },
            lineBreak: {
                before: {
                    ClassDeclaration: 2,
                },
                after: {
                    FunctionDeclarationClosingBrace: 2,
                    ClassOpeningBrace: 1,
                    ClassClosingBrace: 2,
                },
            },
        }),
        sass({output: true}),
        cleanup(),
    ],
}