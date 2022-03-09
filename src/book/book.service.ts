import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { book } from "src/models/book.entity";
import { user } from "src/models/user.entity";
import { Repository } from "typeorm";
import { CreateBookDto } from "./book.dto";
import { takeDto } from "./take.dto";

@Injectable()
export class BookService {

    constructor(@InjectRepository(book) private bookRepository: Repository<book>,
                @InjectRepository(user) private userRepository: Repository<user>) {};

    async CreateBook(dto :CreateBookDto) : Promise<book> {
        const book = await this.bookRepository.create(dto);
        await this.bookRepository.save(book);
        return book;
    }

    async addBook(dto: takeDto) {
        
        const user = await this.userRepository.findOne(dto.user_id);
        if(user.abonement !== false) {
            const count =  (await this.bookRepository.find({ where: { user_id: dto.user_id } })).length;
            if(count <= 5) { 
                await this.bookRepository.createQueryBuilder()
                .update(book)
                .set({user_id:user})
                .where(
                    "title=:title", {title:dto.title})
                .execute();
            }
        }
    }

    async returnBook(dto: takeDto) {
        
        const user = await this.userRepository.findOne(dto.user_id);
        if(user.books.length < 1){
            throw new HttpException("User has not books", 400);
        }

        // Set that book free
        if(await this.bookRepository.createQueryBuilder()
        .update(book)
        .set({user_id:null})
        .where(
            "title=:title", {title:dto.title})
        .execute()) throw new HttpException("Success return book", 200);
        else throw new HttpException("Error of return", 500);

    }

}