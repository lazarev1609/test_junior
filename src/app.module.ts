import { Module } from "@nestjs/common";
import { TypeOrmModule} from '@nestjs/typeorm'
import { BookModule } from "./book/book.module";
import { UserModule } from "./user/user.module";


@Module({
  imports: [TypeOrmModule.forRoot(), BookModule, UserModule],
  controllers: [], 
  providers: [],      
})
export class AppModule {}