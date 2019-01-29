import { Controller, Post, Body, Res, HttpStatus, Get, Param, NotFoundException, Delete, Query } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment";

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // 添加评论， 回复评论
  @Post()
  public async createComent(@Res() res, @Body() createCommentDto: CreateCommentDto) {
    const createComent = await this.commentService.createComment(createCommentDto)
    return res.status(HttpStatus.OK).json({createComent})
  }

  @Get(':articleID')
  public async fetchComment(@Res() res, @Param('articleID') articleID) {
    const fetchedComment = await this.commentService.fetchComment(articleID)
    if(!fetchedComment){
      throw new NotFoundException('Article comment does not exit!')
    }
    res.status(HttpStatus.OK).json({fetchedComment})
  }

  @Delete()
  public async deleteComment(
    @Res() res,
    @Query('commentID')  commentID) {
      const deleteComment = await this.commentService.deleteComment(commentID)
      if (!deleteComment) {
        throw new NotFoundException('comment does not exist!')
      }
      return res.status(HttpStatus.OK).json({
        message: 'comment has been successfully deleted!!',
        comment: deleteComment
      })
   }
}