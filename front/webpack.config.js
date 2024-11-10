module.exports ={
    entry: "./scripts/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    devtool: 'source-map',
}