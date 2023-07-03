import connectDB from '@/utils/ConnectDB'
import nc from 'next-connect'
import Post from '@/models/Post'

connectDB()

const handler = nc().get(async(req, res)=>{
    try {
        const posts = await Post.find({})
        res.send(posts)
    } catch (error) {
        return res.status(400).json({message: 'something went wrong'})
    }
}).post(async(req, res)=>{
    const {title, description, imageUrl} = req.body
    const newpost = new Post({title, description, imageUrl})
    try {
        await newpost.save()
        res.send('New Post Created Successfully')
    } catch (error) {
        return res.status(400).json({message: 'something went wrong'})
    }
})
export default handler
