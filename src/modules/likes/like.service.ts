import { Injectable } from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import {Article} from 'src/modules/articles/interfaces/article.interface';

@Injectable()
export class LikeService {
  constructor(@InjectModel('article') private readonly articleModel : Model <Article>) {}


  public async likeArticle(articleID):Promise <Article> {
    const fetchedArticle = await this.articleModel.findById(articleID).exec()
    fetchedArticle.meta.likes++
    fetchedArticle.save()
    return fetchedArticle
  }
}