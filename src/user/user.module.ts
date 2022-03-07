import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { user } from "src/models/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";


@Module({
    imports: [TypeOrmModule.forFeature([user])], //Передавать список сущностей to array[]
    controllers: [UserController], 
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {};
