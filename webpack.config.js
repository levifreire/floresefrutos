const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    //definindo a entrada das chamadas de import
    entry: './src/main.js',
    //pasta de saida
    output: {
        filename:'principal.js',
        //pasta de destino dos arquivos gerados
        path: __dirname + '/public'
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
        }]
    }
}