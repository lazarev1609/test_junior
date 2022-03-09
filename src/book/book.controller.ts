import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateBookDto } from "./book.dto";
import { BookService } from "./book.service";
import { takeDto } from "./take.dto";

// Create endpoints
@Controller('')
export class BookController {

    constructor(private bookService: BookService) {};

    // Create new book
    @Post('books')
    CreateBook(@Body() bookDto: CreateBookDto) {
        return this.bookService.CreateBook(bookDto);
    }

        
    // Add book to user
    @Post('addBook')
    addBook(@Body() dto: takeDto) {
        return this.bookService.addBook(dto);
    }

    // Return book
    @Post('returnBook') 
        returnBook(@Body() dto:takeDto){
            return this.bookService.returnBook(dto);
        }
        

}