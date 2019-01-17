/**
 * @file: 
 * @module: 
 * @author:  Allen OYang https://github.com/allenYetu211
 */


import * as APP_CONFIG from 'src/app.config';
import * as mongoose from 'mongoose';

export const databaseProvider = {
  provide: 'DbConnectionToken',
  useFactory: async () => { 

    // 连接数据库
    const connection = () => mongoose.connect(APP_CONFIG.MONGODB.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      promiseLibrary: global.Promise,
    });

    // 连接错误
    mongoose.connection.on('error', error => {
      const timeout = 6;
      console.warn(`数据库连接失败！`)
      // setTimeout(connection, timeout * 1000);
      // setTimeout(() => console.warn(`数据库连接失败！将在 ${timeout}s 后重试`, error), 0);
    });

    // 连接成功
    mongoose.connection.on('open', () => {
      setTimeout(() => console.info('数据库连接成功'), 0);
    });
    return await connection();
  },
};
