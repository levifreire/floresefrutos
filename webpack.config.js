const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    //definindo a entrada das chamadas de import
    entry: './src/main.js',
    //pasta de saida
    output: {
        filename:'principal.js',
        //pasta de destino dos arquivos gerados
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    //adicionando plugins
    plugins: [
        //função construtora
        new MiniCssExtractPlugin({
            //nome dos arquivos que serão gerados a partir das transformações
            filename: "estilo.css"
        })
    ],
    module: {
        //regras
        rules: [{
            //criterio que sera usado para ler os arquivos
            //regex
            test: /\.s?[ac]ss$/,
            //utilizando plugins
            use: [
                //extrai o arquivo css para fora
                MiniCssExtractPlugin.loader,
                //'style-loader', //adiciona dentro da DOM a tag <style>
                //responsavel por interpretar os imports, as urls, entre outros
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}