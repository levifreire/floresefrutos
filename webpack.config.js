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
    },
    module: {
        //regras
        rules: [{
            //criterio que sera usado para ler os arquivos
            test: /\.css$/,
            //utilizando plugins
            use: [
                'style-loader', //adiciona dentro da DOM a tag <style>
                //responsavel por interpretar os imports, as urls, entre outros
                'css-loader'
            ]
        }]
    }
}