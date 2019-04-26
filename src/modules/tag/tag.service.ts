import { Injectable } from "@nestjs/common";
import {CreateTagDto} from '@app/modules/tag/dto/create-tag.dto'
import {Model} from 'mongoose';
import { InjectModel} from '@nestjs/mongoose'
import {Tag} from '@app/modules/tag/interfaces/tag.interface'
@Injectable()
export class TagService{

  constructor(@InjectModel('tag') private readonly tagModel: Model<Tag>) {}

  public async getTags(): Promise<Tag> {
    const tags = await this.tagModel.find().exec();
    return tags
  }

  public async getTag(tagID): Promise<Tag> {
    const fetchedTag = await this.tagModel.findById(tagID).exec()
    return fetchedTag
  }

  public async addTag (createTagDto: CreateTagDto): Promise<Tag> {
    const addedTag = await this.tagModel(createTagDto) 
    return addedTag.save()
  }

  public async updateTag(tagID,createTagDto: CreateTagDto): Promise<Tag> {
    const updateTag = await this.tagModel.findByIdAndUpdate(tagID, createTagDto, {new: true})
    return updateTag
  }

  public async deleteTag(tagID): Promise<Tag>{
    const deleteTag = await this.tagModel.findByIdAndRemove(tagID)
    return deleteTag
  }
}