import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import {Article} from 'src/modules/articles/interfaces/article.interface';
import {CreateArticleDto} from 'src/modules/articles/dto/create-articles'


@Injectable()
export class ArticleService {
  constructor(@InjectModel('article') private readonly articleModel : Model <Article>) {}

  public async addArticle(createArticleDto: CreateArticleDto) : Promise <Article> {
    const articles = await this.articleModel(createArticleDto)
    return articles.save()
  }

  public async getArticles(tag_class): Promise <Article> {
    return await this.articleModel.find(tag_class).select('-content').exec();
    // const fetchedArticles = await this.articleModel.find(tags).select('-content').exec();
    // return fetchedArticles
  }

  public async getArticle(articleID): Promise<Article> {
    const fetchedArticle = await this.articleModel.findById(articleID).exec()
   
    // 更新文章访问数量
    fetchedArticle.meta.view++
    fetchedArticle.save()
    return fetchedArticle
  }

  public async updateArticle(articleID, createArticleDto: CreateArticleDto) : Promise <Article> {
    const updateArticle = await this.articleModel.findByIdAndUpdate(articleID, createArticleDto, {new: true})
    return updateArticle
  }

  public async deleteArticle(articleID): Promise <Article>  {
    const deleteArticle = this.articleModel.findByIdAndDelete(articleID)
    return deleteArticle
  }

}