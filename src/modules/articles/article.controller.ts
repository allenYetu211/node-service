import { Controller, Put, Res, Body, HttpStatus, Post, Get, Param, NotFoundException, Query, Delete, UseInterceptors } from "@nestjs/common";
import {ArticleService} from 'src/modules/articles/article.service'
import {CreateArticleDto} from 'src/modules/articles/dto/create-articles'
import { ValidataObjectId } from "src/pipes/validate-object-id.pipe";
import {Article} from 'src/modules/articles/interfaces/article.interface';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService){}

  // 添加文章
  @Post()
  public async addArticle( @Body() createArticleDto: CreateArticleDto) {
    return  await this.articleService.addArticle(createArticleDto)
  }

  // 查找文章列表 && 处理 tag 分类 
  @Get()
  public async getArticles( @Query() query):Promise<Article> {
    return await this.articleService.getArticles(query)
  }

  // 查找单篇文章
  @Get(':articleID')
  public async getArticle(@Param('articleID', new ValidataObjectId()) articleID){
    return await this.articleService.getArticle(articleID)
  }

  // 更新文章
  @Put()
  public async updateArticle(
    @Query('articleID', new ValidataObjectId()) articleID,
    @Body() createArticleDto: CreateArticleDto) {
      return await this.articleService.updateArticle(articleID, createArticleDto)
  }


  @Delete()
  public async deleteArticle(
    @Query('articleID', new ValidataObjectId()) articleID,
  ) {
    return this.articleService.deleteArticle(articleID)
  }

}