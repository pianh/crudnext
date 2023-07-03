const mongoose = require("mongoose");
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://duyanh:Anhlaai123@cluster0.wggtcso.mongodb.net/nextcrud', {useUnifiedTopology : true, useNewUrlParser : true });
        console.log('MongoDB Connection Successfully')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;