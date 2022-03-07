import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { book } from "src/models/book.entity";


@Module({
    imports: [TypeOrmModule.forFeature([book])], //Передавать список сущностей to array[]
    controllers: [], 
    providers: [],       
  })
  export class BookModule {}