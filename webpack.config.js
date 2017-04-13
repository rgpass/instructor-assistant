// TODOs
// Set up sourcemaps

const glob = require('glob');
module.exports = {
	entry: {
		app: glob.sync(__dirname + '/client/**/*.js')
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
}
