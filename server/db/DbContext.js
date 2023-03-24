import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment.js";
import { PostSchema } from '../models/Post.js';
import { TopicSchema } from '../models/Topic.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Topics = mongoose.model('Topic', TopicSchema);
  Posts = mongoose.model('Post', PostSchema);
  Comments = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
