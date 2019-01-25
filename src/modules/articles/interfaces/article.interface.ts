import { Document } from 'mongoose'

export interface  Article extends Document{
  readonly title: string;
  readonly tags: string[];
  readonly introduce: string;
  readonly content: string;
}