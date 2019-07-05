module.exports=[{
    entry: './src/app/index.js',
    output: {
        path: `${__dirname}/src/public`,
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
},
{
    entry: './src/app/login.js',
    output: {
        path: `${__dirname}/src/public`,
        filename: 'bundle2.js'
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
];