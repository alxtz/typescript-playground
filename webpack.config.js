const { exec } = require('child_process')

class RunNodeAfterEmit {
  apply(compiler) {
    compiler.hooks['afterCompile'].tap('Run Dist Script', () => {
      exec('node ./dist/main.js', (err, stdout, stderr) => {
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
      });
    });
  }
}

module.exports = {
  entry: './src/index.ts',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new RunNodeAfterEmit()
  ]
}
