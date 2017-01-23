var path = require("path"),
    webpack = require("webpack"),
    proxy = require("./proxy");

var SRC_PATH = path.join(__dirname, 'src'),
    DIST_PATH = path.join(__dirname, './dist'),
    CONTENT_HASH_TAG = '_[contenthash:5]',
    CHUNK_FILE_HASH_TAG = '_[chunkhash:5]';

var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackMd5Hash = require('webpack-md5-hash');


var config = {
    entry: {
        apps: path.join(SRC_PATH, 'root.js'),
        vendors: [
            'vue',
            'vuex',
            'vue-router',
            'vuex-router-sync',
            'whatwg-fetch',
            'es6-promise',
            'querystring'
        ]
    },

    resolve: {
        alias: {},
        extensions: ["", ".less", ".css", ".js", ".vue", ".json"]
    },

    output: {
        path: DIST_PATH,
        publicPath: '/public/dist/',
        filename: `js/[name].js`
    },

    clearBeforeBuild: true,

    plugins: [

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            '__DEV__': false
        }),

        new webpack.optimize.CommonsChunkPlugin(
            'vendors',
            `js/vendors.js`,
            Infinity
        ),

        new ExtractTextPlugin(`css/commons.css`),

        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            warnings: false
        })
    ],

    module: {
        noParse: [],

        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: "style!css!autoprefixer"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url",
                query: {
                    limit: 8192,
                    name: `images/[name].[ext]`
                }
            },

            {
                test: /\.(eot|woff|woff2|ttf|svg)/,
                loader: "url",
                query: {
                    limit: 100,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },

    vue:{

        loaders:{

            less: ExtractTextPlugin.extract("vue-style", "css!less", {
                publicPath: "../"
            }),


            css: ExtractTextPlugin.extract("vue-style", "css", {
                publicPath: "../"
            })
        }
    }
};


console.log("initializing webpack production build....");

module.exports = config;
