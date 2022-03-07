import { Module } from "@nestjs/common";
import { TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BookModule } from "./book/book.module";
import { UserModule } from "./user/user.module";


@Module({
  imports: [TypeOrmModule.forRoot(), BookModule, UserModule],
  controllers: [AppController], //Контроллеры
  providers: [AppService],       //П
})
export class AppModule {}