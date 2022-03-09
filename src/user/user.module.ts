import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { book } from "src/models/book.entity";
import { user } from "src/models/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";


@Module({
    imports: [TypeOrmModule.forFeature([user, book])],
    controllers: [UserController], 
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {};
