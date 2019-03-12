import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthSchemas } from "./schemas/auth.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'auth', schema: AuthSchemas}])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})

export class AuthModules{}
