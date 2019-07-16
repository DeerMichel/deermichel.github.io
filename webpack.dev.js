module.exports = {
    entry: {
        index: "./src/scripts/index.js",
    },
    output: {
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },

    plugins: [

    ]
}