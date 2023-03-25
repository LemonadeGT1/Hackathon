import mongoose from "mongoose";
const Schema = mongoose.Schema

export const UserSchema = new Schema({
    postId: {type: Schema.Types.ObjectId, required: true, ref: 'Post'},
    authorId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'}
},
    {timestamps: true, toJSON: {virtuals: true}}
)

UserSchema.virtual('user', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

UserSchema.index({ postId: 1, accountId: 1}, {unique: true})