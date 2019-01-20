import {Connection} from 'mongoose';
// 引入schema
import {CatSchema} from './schemas/cat.schema';

export const catsProviders = {
  // 自己定义一个到时候在service.ts中注入
  provide: 'CatModelToken',
  // 使用CatSchema
  useFactory: (connection : Connection) => connection.model('Cat', CatSchema),
  // DbConnectionToken是database.providers.ts里面的key
  inject: ['DbConnectionToken']
}
