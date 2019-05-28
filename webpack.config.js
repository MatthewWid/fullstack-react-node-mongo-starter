const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");

const config = {
	mode: "development",
	entry: {
		"home": path.resolve(__dirname, "./src/home.js"),
		"profile": path.resolve(__dirname, "./src/profile.js")
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].[hash].js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			chunks: "initial"
		}
	},
	plugins: [
		new ManifestPlugin({
			fileName: path.resolve(__dirname, "./src/webpack.manifest.json"),
			publicPath: "./public/"
		})
	]
};

module.exports = config;
