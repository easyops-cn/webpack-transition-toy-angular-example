const path = require('path')
const process = require('process')

const contentBase = path.resolve(process.cwd(), './app');

module.exports = {
    context: contentBase,
    entry: './entry.js',
    output: {
        path: path.resolve(process.cwd(), './app/bundle'),
        filename: 'entry.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', { targets: { browsers: ['last 2 Chrome versions'] }, modules: false }]
                    ]
                }
            }]
        }]
    },
    devServer: {
        contentBase: contentBase,
        port: 1339
    }
}