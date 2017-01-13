module.exports = {
    '/api/*': {
        target: 'http://127.0.0.1:1983',
        secure: false,
        pathRewrite: {'^/api' : ''}
    }
};
