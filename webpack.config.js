module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/index.js']
    },

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/,
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
                use: ['url-loader?limit=100000']
            },
        ]
    },
    devServer: {
        contentBase: __dirname,
        port: 3000,
        host: 'localhost',
    },

};