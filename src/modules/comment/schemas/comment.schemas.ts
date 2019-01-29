import * as mongoose from 'mongoose'

export const  CommentSchemase  = new mongoose.Schema({
  pid: {
    type: String,
    default: ''
  },
  content: String,
  articleId: String
})