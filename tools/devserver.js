const path = require('path');
const portfinder = require('portfinder');
const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.dev.config.js');

const app = new Express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quite: false,
  noInfo: false,
  headers: {
      'X-Custom-Header': 'yes',
  },
  stats: {
    colors: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: [/node_modules/],
  },
}));

app.use(Express.static('../dist'));
app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../dist/index.html"))
);
app.use(webpackHotMiddleware(compiler));

portfinder.getPort((err, port) => {
  app.listen(port, () => {
      console.log(`Server start at: http://localhost:${port}`);
  });
});
