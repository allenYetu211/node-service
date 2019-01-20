/**
 * @file: 
 * @module: cat service
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Cat} from 'src/interface/cat.interface'
import { CreateCatDto } from "src/dto/create-cat.dto";
import { TMongooseModel } from 'src/interface/mongoose.interface';
@Injectable()
export class CatsService {
  constructor(@InjectModel('CatModelToken') private readonly catModel: Model<Cat>) {}
  public async create(createCatDto: CreateCatDto): Promise<Cat> {
  // console.log('catModel',this.catModel)

    // const createdCat = new this.catModel(createCatDto);
    // return await createdCat.save();
    return 
  }


  public async findAll(): Promise<Cat[]> {
    // return await this.catModel.find().exec();
    return
  }
}