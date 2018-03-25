var path = require('path');
var webpack = require('webpack');

module.exports = {
    node: {
        fs: 'empty',
        child_process: 'empty',
        net: 'empty'
    },
    entry: {
        'automator': path.normalize(__dirname + '/src/main'),
        'paypalLogin': path.normalize(__dirname + '/src/paypalLogin'),
        'thread': path.normalize(__dirname + '/src/thread'),
        'bg': path.normalize(__dirname + '/src/bg')
    },
    output: {
        filename: '[name].js',
        publicPath: 'https://rawgit.com/BhargavThakrar/test/master/dist/',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'Automator': path.resolve(__dirname, './src/lib/automator'),
            'Dom': path.resolve(__dirname, './src/lib/dom'),
            'components': path.resolve(__dirname, './src/components'),
            'lib': path.resolve(__dirname, './src/lib'),
            'util': path.resolve(__dirname, './src/util'),
            'config': path.resolve(__dirname, './src/config'),
            'constants': path.resolve(__dirname, './src/constants'),
            'handlers': path.resolve(__dirname, './src/handlers'),
            'clients': path.resolve(__dirname, './src/clients'),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'Automator': 'Automator',
            '__dom__': 'Dom'
        })
    ],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    }
};
