import * as mongoose from 'mongoose'

export const TagSchema = new mongoose.Schema({
  tag: String,
  type: String
})