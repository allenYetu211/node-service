import { Document } from 'mongoose'

export interface Login extends Document {
  readonly userName: string;
  readonly password: string;
}