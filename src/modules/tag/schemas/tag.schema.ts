import * as mongoose from 'mongoose'

export const TagSchema = new mongoose.Schema({
  msg: String,
  type: String
})