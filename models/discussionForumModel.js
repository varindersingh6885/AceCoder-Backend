import mongoose from "mongoose";

const discussionForumSchema = mongoose.Schema({
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Problem",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: Object,
    required: true,
  },
  views: {
    type: Number,
    default : 0
  },
  likes: [],
  comments: [],
});

const DiscussionForum = mongoose.model(
  "discussionForum",
  discussionForumSchema
);

export default DiscussionForum;
