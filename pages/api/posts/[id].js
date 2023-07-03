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
}).put(async(req, res)=> {

    try {
        const post = await Post.findOne({_id : req.query.id})
        post.title = req.body.title
        post.description = req.body.description
        post.imageUrl = req.body.imageUrl
        await post.save()
        res.send('Post updated successfully')
    } catch (error) {
        return res.status(400).json({message: 'something went wrong'})
    }
}).delete(async (req, res) => {
    try {
      await Post.findOneAndDelete({ _id: req.query.id });
      res.send('Post deleted successfully');
    } catch (error) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  });
  
export default handler
