/**
 * Created by Igor Haiduk on 13.05.2016.
 */
'use strict';

const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackAnybarPlugin = require('webpack-anybar-plugin').default;
const server = require('./server');

const clientPath    = path.join(__dirname, '../');
const stylePath     = path.join(__dirname, '../Styles');
const staticPath    = path.join(__dirname, '../Static');
const buildPath     = path.join(__dirname, '../.build');

const server_webpack = {
    host: server.host,
    webpackPort: server.port,
    baseUrl: `http://${server.host}:${server.port}`
};

module.exports = (function () {

    let config = {
        target: 'web',
        debug: true,
        context: __dirname,
        cache: true,
        devtool: 'cheap-module-eval-source-map',
        entry: [
            `webpack-dev-server/client?http://0.0.0.0:${server.port}`, // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            path.join(clientPath, 'Application', '/index') // Your appʼs entry point
        ],
        output: {
            path: buildPath,
            filename: 'client.bundle.js',
            publicPath: `/`,
            pathinfo: true,
            crossOriginLoading: 'anonymous'
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
            root: clientPath,
            alias: {
                style:          stylePath,
                images:         path.join(staticPath, 'images'),
                root:           path.join(clientPath, 'Application'),
                mixins:         path.join(clientPath, 'Mixins'),
                classes:        path.join(clientPath, 'Classes'),
                components:     path.join(clientPath, 'Components'),
                groups:         path.join(clientPath, 'Groups'),
                router:         path.join(clientPath, 'Router'),
            }
        },
        module: {
            loaders: [
                {
                    test: /\.(js|jsx?)$/,
                    loader: 'babel',
                    include: clientPath,
                    exclude: [/node_modules/, /webpack/, /Styles/, /Static/]
                },
                {
                    test: /\.(pug|jade)$/,
                    loaders: ['jade-react'],
                    include: path.join(clientPath),
                    exclude: [/node_modules/, /webpack/, /Styles/, /Static/]
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        'style?sourceMap',
                        'css?modules&camelCase&importLoaders=1&allowMultiple=true&localIdentName=[name]---[local]',
                        'postcss-loader',
                        'sass?sourceMap'
                    ],
                    exclude: [/node_modules/, /webpack/, /Application/, /Static/]
                },
                {
                    test: /.*\.(gif|png|jpe?g|svg|cur)$/i,
                    loaders: [
                        'file?hash=sha512&digest=hex&name=[hash].[ext]',
                        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                    ],
                    include: staticPath,
                    exclude: [/node_modules/, /webpack/, /Application/, /Styles/]
                }
            ]
        },

        sassLoader: {
            data: "$env: " + (process.env.NODE_ENV || 'development') + ";",
            includePaths: [stylePath, clientPath]
        },

        postcss: function () {
            return [
                require('postcss-import'),
                require('postcss-url'),
                require('postcss-cssnext'),
                //require('cssnano'),
                require('postcss-browser-reporter'),
                require('postcss-reporter')
            ];
        },

        browser: {
            child_process: 'empty',
            net: 'empty',
            tls: 'empty',
            fs: 'empty'
        },

        plugins: [
            new ProgressBarPlugin({
                format: `${chalk.blue.bold('Building client bundle')} [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
                renderThrottle: 100,
                summary: false,
                customSummary: (t) => {
                    return console.log(chalk.blue.bold(`Built client in ${t}.`));
                }
            }),
            new webpack.DefinePlugin({
                BUILD_TIME: JSON.stringify((new Date()).getTime()),
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new WebpackAnybarPlugin({
                port: 1738
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],

        devServer: {
            publicPath: `${server_webpack.baseUrl}/`,
            host: server_webpack.host,
            hot: true,
            historyApiFallback: true,
            port: server_webpack.webpackPort,
            stats: {
                colors: true,
                chunkModules: false,
                modules: false
            }
        },

        watch: true
    };

    return config;


})();