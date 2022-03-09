import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('')
export class UserController {

    constructor(private userService: UserService) {};

    // Create new user
    @Post('/users')
    CreateUser(@Body() userDto: CreateUserDto) {
        return this.userService.CreateUser(userDto);
    }

    // Get all users
    @Get('/users') 
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    // Get 1 user
    @Get('/users/:id')
    getUser(@Param('id') id: number) {
        return this.userService.getUser(id);
    }
    

    // Edit user
    @Post('/users/:id')
    updateUser(@Param('id') id:number, @Body() userDto: CreateUserDto) {
        return this.userService.updateUser(id, userDto);
    }

    // Delete user
    @Delete('/users/:id')
    deleteUser(@Param('id') id:number) {
        return this.userService.deleteUser(id);
    }

    // Subscription
    @Put('/users/:id')
    subscribe(@Param('id') id: number) {
        return this.userService.subscribe(id);
    }
}