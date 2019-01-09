/**
 * @file: 
 * @module: cat service
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import { Injectable } from "@nestjs/common";
import {Cat} from '../../interface/cat.interface'


@Injectable()
export class CatsService {
  private readonly cats : Cat[] = [];

  create(cat: Cat){
    this.cats.push(cat)
  }

  findAll():Cat[] {
    return this.cats
  }
}