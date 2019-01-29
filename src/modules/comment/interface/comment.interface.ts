import { Document } from 'mongoose'

export interface Comment extends Document {
  readonly pid: string;
  readonly connent: string;
  readonly articleId: string
}