const mongoose = require('mongoose');

const connectDb = (url) => {
    return mongoose.connect(url,{
    useFindAndModify:false ,
    useNewUrlParser: true ,
    useUnifiedTopology:true,
    useCreateIndex:true ,
})
}
module.exports = connectDb ;