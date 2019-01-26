import { Document } from 'mongoose'

export interface Tag extends Document {
  readonly msg: string;
  readonly type: string;
}