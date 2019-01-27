import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import {Article} from 'src/modules/articles/interfaces/article.interface';
import {CreateArticleDto} from 'src/modules/articles/dto/create-articles'


@Injectable()
export class ArticleService {
  constructor(@InjectModel('article') private readonly articleModle : Model <Article>) {}

  public async addArticle(createArticleDto: CreateArticleDto) : Promise <Article> {
    const articles = await this.articleModle(createArticleDto)
    return articles.save()
  }

  public async getArticles(tag_class): Promise <Article> {
    const tags = tag_class ? {tags: tag_class} : {}
    const fetchedArticles = this.articleModle.find(tags).select('-content').exec();
    return fetchedArticles
  }

  public async getArticle(articleID): Promise<Article> {
    const fetchedArticle = await this.articleModle.findById(articleID).exec()
   
    // 更新文章访问数量
    fetchedArticle.meta.view++
    fetchedArticle.save()
    return fetchedArticle
  }

  public async updateArticle(articleID, createArticleDto: CreateArticleDto) : Promise <Article> {
    const updateArticle = await this.articleModle.findByIdAndUpdate(articleID, createArticleDto, {new: true})
    return updateArticle
  }

  public async deleteArticle(articleID): Promise <Article>  {
    const deleteArticle = this.articleModle.findByIdAndDelete(articleID)
    return deleteArticle
  }

}