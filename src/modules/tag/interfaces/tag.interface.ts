import { Document } from 'mongoose'

export interface Tag extends Document {
  readonly tag: string;
  readonly type: string;
}