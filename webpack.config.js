var path = require('path');

module.exports = {
  devtool: 'source-map',
	entry: './src/scripts/App.js',
	output: {
		path: path.resolve(__dirname, './scripts'),
		filename: 'App.js'
	}
  // module: {
  //   rules: [
  //     {
  //     test: /\.js$/,
  //     loader: 'babel-loader',
  //     query: {
  //       presets: ['es2015']
  //     }
        
  //     }
  //   ]
  // }
}