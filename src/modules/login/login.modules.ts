import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { MongooseModule } from "@nestjs/mongoose";
import { LoginSchema } from "./schemas/login.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'login', schema: LoginSchema}])
  ],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService]
})

export class LoginModules{}
