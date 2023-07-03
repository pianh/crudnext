const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageUrl : String,
})

export default mongoose.models.Post || mongoose.model("Post", postSchema)