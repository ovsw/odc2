var path = require('path');

module.exports = {
  devtool: 'source-map',
	entry: './app/assets/scripts/App.js',
	output: {
		path: path.resolve(__dirname, './app/temp/scripts'),
		filename: 'App.js'
	},
    module: {
      rules: [
        {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
          
        }
      ]
    }
}