import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TopicSchema = new Schema (
    {
    title: { type: String, required: true, maxLength: 50},
    body: { type: String, required: true, maxLength: 250}
    },
    {timestamps: true, toJson: { virtuals: true}}
) 