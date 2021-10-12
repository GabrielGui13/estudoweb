const modoDev = process.env.NODE_ENV !== 'production' //se criar no build, modo dev true or false por production
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') //antigo optimize-css-assets-webpack-plugin
const TerserPlugin = require('terser-webpack-plugin') //antigo uglifyjs-webpack-plugin

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        // contentBase: './public', => deprecated
        static: { //new soluution => https://webpack.js.org/configuration/dev-server/
            directory: __dirname + '/public'
        },
        compress: true,
        port: 9000
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({}),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
                //cache: true => nao funciona mais
            })
        ]
    },
    plugins: [ //forma de externalizar o arquivo css e nao colocar ele no principal.js
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            // test: /\.css$/, => interpreta todo arquivo .scss, joga tudo por dom no principal.js
            test: /\.s?[ac]ss$/, // \. como . literal, s com ? pois eh opcional, [ac] pois pode ser a ou c no lugar, e ss pra finalizar, .css, .sass, .scss
            use: [
                MiniCssExtractPlugin.loader, //conflita com o style-loader, forma de inicializar
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //Interpreta @import, url()...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/, //qualquer uma das extensoes entre (x|y)
            use: ['file-loader'] //dando erro na hora do webpack, gera dois arquivos, apenas o segundo funciona
        }]
    }
}