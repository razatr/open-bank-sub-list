const proxy = require('http-proxy-middleware')

const target = 'http://localhost:3001/'
//const target = 'https://app.rashidov.su/'

module.exports = function (app) {
    app.use(proxy('/api', {
        target,
        changeOrigin: true
    }))

    app.use(proxy('/iot', {
        target,
        changeOrigin: true
    }))
}
