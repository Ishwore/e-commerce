const mongoose = require('mongoose');
const connectDB = async () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/ecommerce')
    .then(() => {
        console.log("connect to mongodb")
        // app.listen(5000, () => {
        //     console.log("server is running on port : 5000 ");
        // })
    })
    .catch(error => console.log(error));
}

module.exports=connectDB;

  