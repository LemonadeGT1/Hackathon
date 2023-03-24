import mongoose from "mongoose";
const Schema = mongoose.Schema


export const PostSchema = new Schema({
    title: {type: String, required: true, maxLength: 50},
    body: {type: String, required: true, maxLength: 1000},
    imgUrl: {type: String, required: true},
    authorId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    topicId: {type: Schema.Types.ObjectId, required: true, ref: 'Topic'}
},
    {timestamps: true, toJSON: {virtuals: true}}
)

PostSchema.virtual('topic', {
    localField: 'topicId',
    ref: 'Topic',
    foreignField: '_id',
    justOne: true
})

PostSchema.virtual('author', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})