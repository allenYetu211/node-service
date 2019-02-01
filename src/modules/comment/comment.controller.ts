import { Controller, Post, Body, Res, HttpStatus, Get, Param, NotFoundException, Delete, Query } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment";

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // 添加评论， 回复评论
  @Post()
  public async createComent( @Body() createCommentDto: CreateCommentDto) {
    return await this.commentService.createComment(createCommentDto)
  }

  @Get(':articleID')
  public async fetchComment( @Param('articleID') articleID) {
    return  await this.commentService.fetchComment(articleID)
  }

  @Delete()
  public async deleteComment(
    @Query('commentID')  commentID) {
      return  await this.commentService.deleteComment(commentID)
   }
}