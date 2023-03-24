import mongoose from "mongoose";
const Schema = mongoose.Schema

export const CommentSchema = new Schema({
  body: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  postId: { type: Schema.Types.ObjectId, required: true, ref: 'Post' }
},
  { timestamps: true, toJSON: { virtuals: true } }

)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
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