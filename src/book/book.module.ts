import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { book } from "src/models/book.entity";
import { user } from "src/models/user.entity";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";


@Module({
    imports: [TypeOrmModule.forFeature([book,user])],
    controllers: [BookController], 
    providers: [BookService],  
    exports: [BookService]     
  })
  export class BookModule {}