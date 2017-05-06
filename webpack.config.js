const path = require('path')
const process = require('process')
const webpack = require('webpack')

const contentBase = path.resolve(process.cwd(), './app');

module.exports = {
    context: contentBase,
    devtool: 'source-map',
    entry: './entry.js',
    output: {
        path: path.resolve(process.cwd(), './app/bundle'),
        filename: 'entry.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /bower_components|node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', { targets: { browsers: ['last 2 Chrome versions'] }, modules: false }]
                    ]
                }
            }, {
                loader: 'imports-loader',
                options: 'angular' // use '$=jquery' for jquery imports
            }]
        }, {
            test: path.resolve(process.cwd(), './app/bower_components/angular-route/index.js'),
            use: [{
                loader: 'imports-loader',
                options: 'angular'
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        modules: [
            path.resolve(process.cwd(), './node_modules'),
            path.resolve(process.cwd(), './app/bower_components')
        ],
        descriptionFiles: ['package.json', 'bower.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: contentBase,
        hot: true,
        port: 1339
    }
}