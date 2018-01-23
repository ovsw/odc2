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
          // "test" is commonly used to match the file extension
          test: /\.js$/,

          // "include" is commonly used to match the directories
          include: [
            path.resolve(__dirname, './app/temp/scripts')
          ],

          // "exclude" should be used to exclude exceptions
          // try to prefer "include" when possible

          query: {
            presets: ['es2015']
          },
          
          // the "loader"
          loader: "babel-loader" // or "babel" because webpack adds the '-loader' automatically
        }
      ]
    }
}