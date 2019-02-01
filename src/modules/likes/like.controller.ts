import { Controller, Patch, Body, NotFoundException, Res, HttpStatus } from "@nestjs/common";
import {LikeService} from './like.service'
@Controller('like')
export class LikeController {
    constructor (private readonly likeService: LikeService)  {}

    @Patch()
    likeArticle(@Body('articleID') articleID) {
        return this.likeService.likeArticle(articleID)
    }
} 
