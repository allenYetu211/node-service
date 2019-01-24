import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import * as mongoose from 'mongoose'

@Injectable()
export class ValidataObjectId implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    const isValid = mongoose.Types.ObjectId.isValid(value)
    if (!isValid) {
      throw new BadRequestException(`Invalid ID!`)
    }
    return value
  }
}