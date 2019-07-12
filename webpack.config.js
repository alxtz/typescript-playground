module.exports = {
  entry: './src/index.ts',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
}
