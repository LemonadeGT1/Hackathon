import mongoose from "mongoose";
const Schema = mongoose.Schema

export const CommentSchema = new Schema({
  body: { type: String, required: true },
  authorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  postId: { type: Schema.Types.ObjectId, required: true, ref: 'Post' }
},
  { timestamps: true, toJSON: { virtuals: true } }

)
//TODO - make sure to send postId down through front end post so we can get it when we are setting an active



CommentSchema.virtual('author', {
  localField: 'authorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

CommentSchema.virtual('post', {
  localField: 'postId',
  ref: 'Post',
  foreignField: '_id',
  justOne: true
})