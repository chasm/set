import webpack from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import stylelint from 'stylelint'

const TARGET = process.env.npm_lifecycle_event

process.env.BABEL_ENV = TARGET

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    main: './src/client.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  },
  externals: {
    'jsdom': 'window',
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loaders: [ 'postcss' ],
        include: PATHS.src
      },
      {
        test: /\.jsx?$/,
        loaders: [ 'eslint' ],
        include: PATHS.src
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: [ 'style', 'css', 'myth' ],
        include: PATHS.src
      },
      {
        test: /\.jsx?$/,
        loaders: [ 'babel?cacheDirectory' ],
        include: PATHS.src
      }
    ]
  },
  postcss: function () {
    return [stylelint({
      rules: {
        'color-hex-case': 'lower'
      }
    })]
  }
}

const startConfig = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

const buildConfig = {}

const config = (TARGET === 'start' || !TARGET)
  ? merge(common, startConfig)
  : merge(common, buildConfig)

export default config
