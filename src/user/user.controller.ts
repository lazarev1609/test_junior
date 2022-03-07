import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";
import { UserService } from "./user.service";

// Create endpoints
@Controller('')
export class UserController {

    constructor(private userService: UserService) {};

    @Post('/users')
    CreateUser(@Body() userDto: CreateUserDto) {
        return this.userService.CreateUser(userDto);
    }

    @Get('/users/:id')
    getUser(@Param('id') id: number) {
        return this.userService.getUser(id);
    }

    @Delete('/users/:id')
    deleteUser(@Param('id') id:number) {
        return this.userService.deleteUser(id);
    }
}