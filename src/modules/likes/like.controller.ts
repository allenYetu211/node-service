import { Controller, Patch, Body, NotFoundException, Res, HttpStatus } from "@nestjs/common";
import {LikeService} from './like.service'
@Controller('like')
export class LikeController {
    constructor (private readonly likeService: LikeService)  {}

    @Patch()
    likeArticle(@Res() res , @Body('articleID') articleID) {
        const fetchedArticle = this.likeService.likeArticle(articleID)
        if (!fetchedArticle) {
          throw new NotFoundException('Article does not exist!')
        }

        return res.status(HttpStatus.OK).json({
          message: '点赞成功'
        })
        
    }
} 
