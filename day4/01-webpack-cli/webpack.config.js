var path=require('path');
module.exports={
    entry:'./app.js',
    output:{
        path:path.join(__dirname,'dist'),
        publicPath: '/dist',
        filename:'index.js'
    }
}