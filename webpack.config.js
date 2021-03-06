
const webpack = require('webpack');
const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

const config = {
    mode: isProd ? "production" : "development",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: resolve(__dirname, "dist"),
        filename: "./js/[name].[contenthash].js",
        clean: true,
    },
    resolve: {
        alias: {
            "@": resolve("src"),
            "buffer": "buffer",
            "stream": "stream-browserify"
        },
        extensions: [".scss", ".ts", ".tsx", ".js", ".jsx", ".json"],
        fallback: {
            "buffer": require.resolve("buffer/"),
            "fs": false,
            "os": false,
            "net":false,
            "tls":false,
            "util": false,
            "http": false,
            "https": false,
            "path": false,
            "assert": false,
            "crypto": false,
            "stream": require.resolve("stream-browserify"),
            "zlib": false,
            "url": false,
            "querystring":false,
            "utf-8-validate":false,
            "bufferutil":false
        },
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", {targets: "defaults"}]],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "MyStartingProjectReact",
            template: "public/index.html",
            alwaysWriteToDisk: true,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[name].[id].css",
            ignoreOrder: false,
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
};

if (isProd) {
    config.optimization = {
        minimize: true,
        minimizer: [new TerserWebpackPlugin()],
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];
                        return `npm.${packageName.replace("@", "")}`;
                    },
                },
            },
        },
    };
    config.devtool = "source-map";
} else {
    config.devServer = {
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        static: "./dist",
        historyApiFallback: true
    };
    config.devtool = "inline-source-map";
}

module.exports = config;