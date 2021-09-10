const path = require('path');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  console.log("REACT_APP_USE_MOCK: ", process.env.REACT_APP_USE_MOCK);
  // console.log("process.env", process.env);
  
  return {
    mode: process.env.NODE_ENV ? 'development' : 'production',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(woff|woff2)$/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          test: /\.(css)/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.(json)/,
          use: [
            { loader: "file-loader" }
          ]
        }     
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": dotenv.parsed
      }),
     //new CopyPlugin({
      //  patterns: [
      //    { from: path.resolve(__dirname, "poc.html"), to: "index.html" }
      //  ],
      //})
    ],
    resolve: {
      modules: [
          "src",
          "node_modules"
      ],
      alias: {
        ApiModule: process.env.REACT_APP_USE_MOCK === 'true' ? path.resolve(__dirname, 'src/api/mocks') : path.resolve(__dirname, 'src/api')
      },
      extensions: [ '.tsx', '.tsx.html', '.ts', '.js', '.jsx', '.jsx.html' ]
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library: "EdgenuityContentTools"
    },
    devServer: {
      host: "local.edgenuity.com",
      https: true,
      contentBase: path.join(__dirname, '.'),
      compress: true,
      port: 9000
    }
  } 
};

