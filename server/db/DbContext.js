import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { TopicSchema } from '../models/Topic.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Topics = mongoose.model('Topic', TopicSchema);
}

export const dbContext = new DbContext()
