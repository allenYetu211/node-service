
import { MongooseModule } from "@nestjs/mongoose";
import { AuthSchemas } from "./schemas/auth.schemas";

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import {HttpStrategy} from './http.strategy'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'nodepress',
      signOptions: {
        expiresIn: 3600 as number,
      },
    }),
    MongooseModule.forFeature([{name: 'auth', schema: AuthSchemas}])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, AuthService]
})

export class AuthModules {}
// export class AuthModules implements NestModule{
//   public configure(consumber: MiddlewareConsumer) {
//     //apply、forRoute方法允許傳入多個參數
//     consumber.apply(passport.authenticate('jwt', { session: false }))
//         .forRoutes({ path: '/users', method: RequestMethod.ALL });
// }
// }
