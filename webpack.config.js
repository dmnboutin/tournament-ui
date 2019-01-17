const path = require("path");

module.exports = {
    entry: "./src/index.js",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        // filename and path are required
        filename: "main.js",
        // output.path
        // The output directory as an absolute path
        path: path.resolve(__dirname, "dist")
    },
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
    serve: {
        content: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                }
            }
        ]
    }
};