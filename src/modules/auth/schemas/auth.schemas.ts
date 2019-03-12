import * as mongoose from 'mongoose'

export const AuthSchemas =  new mongoose.Schema({
  username: String,
  password: String
})