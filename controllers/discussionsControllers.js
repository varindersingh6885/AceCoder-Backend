import DiscussionForum from '../models/discussionForumModel.js'
import Problem from '../models/problemModel.js'

export const submit = async (req, res) => {
    const problemId = req.params.problemId;
    try {
        const problemExists = await Problem.findOne({_id : problemId});
        if(problemExists){
            const newDiscussion = await DiscussionForum.create({
                ...req.body,
                user : req.body.userId,
                problemId
            })
            if(newDiscussion){
                res.json(newDiscussion)
            }
        }
        else
            res.json({msg : "hold on"})
        
    } catch (error) {
        res.status(500)
        res.json(req.body)
    }
}

export const getAll = async (req, res) => {
    const problemId = req.params.problemId;
    try {
        const discussions = await DiscussionForum.find({problemId},{text : 0}).populate('user','name email')
        res.json(discussions)
    } catch (error) {
        res.status(500)
        res.json({error : "discussions not found"})
    }
}

export const getOne = async (req, res) => {
    const discussionId = req.params.discussionId;
    
    try {
        const discussion = await DiscussionForum.findOne({_id : discussionId}).populate('user','name email')
        res.json(discussion)
    } catch (error) {
        res.status(500)
        res.json({error : "discussion not found"})
    }
}