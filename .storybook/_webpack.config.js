const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ico|json|svg|woff|woff2|ttf|eot|gif|png|jpg)$/,
        exclude: /db\.json$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1
          }
        }]
      },
      {
        test: require.resolve('react'),
        use: [{
          loader: 'expose-loader',
          query: 'React'
        }]
      },
      {
        test: require.resolve('react-dom'),
        use: [{
          loader: 'expose-loader',
          query: 'ReactDOM'
        }]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'raw-loader'
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.md$/,
        use: [
          'raw-loader'
        ]
      }
    ]
  }
}
