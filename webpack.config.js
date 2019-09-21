module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx) &/,
                exclude: /node_module/,
                user: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}