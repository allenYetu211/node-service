import { Injectable } from "@nestjs/common";
import {Model} from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import {Comment} from './interface/comment.interface'
import { CreateCommentDto } from "./dto/create-comment";
@Injectable()
export class CommentService{
  constructor(@InjectModel('comment') private readonly commentModel: Model<Comment> ) {}

  public async createComment(createCommentDto: CreateCommentDto): Promise<Comment>{
    const createComment = await this.commentModel(createCommentDto)
    return createComment.save()
  }
  

  public async fetchComment(articleId: string): Promise<Comment>{
    const fetchedComment = await this.commentModel.find({articleId}).exec()
    return fetchedComment
  }

  public async deleteComment(commentId: string) : Promise<Comment>  {
    const deleteComment = await this.commentModel.findByIdAndDelete(commentId)
    return deleteComment
  }


}