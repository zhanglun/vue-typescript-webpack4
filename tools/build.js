const ora = require('ora');
const rm = require('rimraf');
const signale = require('signale');
const webpack = require('webpack');
const webpackConfig = require('./webpack.pro.config');

const spinner = ora('building for production...');

spinner.start();

rm(webpackConfig.output.path, (err) => {
	if (err) {
		throw err;
	}

	webpack(webpackConfig, (err, stats) => {
		spinner.stop();

		if (err) {
			throw err;
		}

		process.stdout.write(stats.toString({
			colors: true,
			// modules: false,
			// children: false,
			// chunks: false,
			// chunkModules: false,
		}) + '\n\n');

		signale.success('Build Completed!');
	})
});
