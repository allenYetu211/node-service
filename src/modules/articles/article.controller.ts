import { Controller, Put, Res, Body, HttpStatus, Post, Get, Param, NotFoundException, Query, Delete } from "@nestjs/common";
import {ArticleService} from 'src/modules/articles/article.service'
import {CreateArticleDto} from 'src/modules/articles/dto/create-articles'
import { ValidataObjectId } from "src/pipes/validate-object-id.pipe";
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService){}

  // 添加文章
  @Post()
  public async addArticle(@Res() res, @Body() createArticleDto: CreateArticleDto) {
    const addedArticle = await this.articleService.addArticle(createArticleDto)
    return res.status(HttpStatus.OK).json({
      message: 'Tag has been successfully added!',
      article: addedArticle
    })
  }

  // 查找文章
  @Get()
  public async getArticles(@Res() res) {
    const fetchedArticles = await this.articleService.getArticles()
    return res.status(HttpStatus.OK).json({fetchedArticles})
  }

  // 查找单篇文章
  @Get(':articleID')
  public async getArticle(@Res() res , @Param('articleID', new ValidataObjectId()) articleID){
    const fetchedArticle = await this.articleService.getArticle(articleID)
    if (!fetchedArticle) {
      throw new NotFoundException('Article does not exist!')
    }
    return res.status(HttpStatus.OK).json({fetchedArticle})
  }

  // 更新文章
  @Put()
  public async updateArticle(
    @Res() res,
    @Query('articleID', new ValidataObjectId()) articleID,
    @Body() createArticleDto: CreateArticleDto) {

      const updateArticle = await this.articleService.updateArticle(articleID, createArticleDto)
      if (!updateArticle) {
        throw new NotFoundException('Article does not exist!')     
      }

      return res.status(HttpStatus.OK).json({
        message: 'Article has been successfully updated!',
        article: updateArticle
      })
  }


  @Delete()
  public async deleteArticle(
    @Res() res,
    @Query('articleID', new ValidataObjectId()) articleID,
  ) {
    const deleteArticle = this.articleService.deleteArticle(articleID)
    if (!deleteArticle) {
      throw new NotFoundException('Article does not exist!')
    }
    return res.status(HttpStatus.OK).json({
      message: 'Article has been successfully deleted!!',
      article: deleteArticle
    })
  }

}