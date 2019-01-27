import { Document } from 'mongoose'

interface IMate {
  view: number,
  links: number,
  comment: number
}
export interface  Article extends Document{
  readonly title: string;
  readonly tags: string[];
  readonly introduce: string;
  readonly content: string;
  readonly mate: IMate
}