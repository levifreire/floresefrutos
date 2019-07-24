const webpack = require('webpack')

module.exports = {
    mode: 'development',
    //definindo a entrada das chamadas de import
    entry: './src/main.js',
    //pasta de saida
    output: {
        filename:'principal.js',
        //pasta de destino dos arquivos gerados
        path: __dirname + '/public'
    }
}