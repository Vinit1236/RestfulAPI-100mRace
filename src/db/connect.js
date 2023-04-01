const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Olympics"
).then(()=>{
    console.log("Database Connected Successfully...");
}).catch(()=>{
    console.log("No Connection!!");
});