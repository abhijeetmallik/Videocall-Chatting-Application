const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abhijeet:root@cluster0.conzd4j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(() =>{
    console.log(`connection successful`);
}).catch((err) =>{
    console.log(`no connection: ${err.message}`);
})
