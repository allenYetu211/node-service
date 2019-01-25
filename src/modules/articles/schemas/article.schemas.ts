import * as mongoose from 'mongoose'

export const ArticleSchemas =  new mongoose.Schema({
  title: String,
  tags: Array,
  introduce: String,
  content: String
})