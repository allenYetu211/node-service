import * as mongoose from 'mongoose'

export const ArticleSchemas =  new mongoose.Schema({
  title: String,
  tags: Array,
  introduce: String,
  content: String,
  meta: {
    view: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    }
  }
})