const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        historyApiFallback: true,
    },
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: ['style-loader',
                'css-loader',
                'sass-loader'
            ],
        }],
    },
    devtool: 'eval-cheap-module-source-map'
};
