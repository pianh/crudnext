import connectDB from '@/utils/ConnectDB'
import nc from 'next-connect'
import Post from '@/models/Post'

connectDB()

const handler = nc().get(async(req, res)=>{
    try {
        const post = await Post.findOne({_id : req.query.id})
        res.send(post)
    } catch (error) {
        return res.status(400).json({message: 'something went wrong'})
    }
})
export default handler
