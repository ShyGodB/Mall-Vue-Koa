module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: false, // 是否开启语法检测
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:2828',
                ws: true,
                changeOrigin: true
                // pathRewrite: {
                //     'api': ''
                // }
            }
        }
    }
}
