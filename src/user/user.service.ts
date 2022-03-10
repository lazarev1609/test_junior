import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { user } from "src/models/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./user.dto";

@Injectable()
export class UserService {

    constructor(@InjectRepository(user) private userRepository: Repository<user>) {};

    async CreateUser(dto: CreateUserDto) : Promise<user> {                  
        const user = await this.userRepository.create(dto);
        await this.userRepository.save(user);
        return user;
    }

    async getAllUsers() : Promise<user[]>{
        const users = await this.userRepository.find();
        console.log(users);
        return users;
    }

    async getUser(id:number) : Promise<user> {
        const user = await this.userRepository.findOne(id);
        console.log(user.books);
        return user;
    }

    async updateUser(id:number, userDto: CreateUserDto) {
        if(this.userRepository.update(id, userDto)){
            throw new HttpException('Success update', 200);
        }
        else throw new HttpException('Update error', 500);
    }

    async deleteUser(id:number) : Promise<void> {
        if(!await this.userRepository.findOne(id)) {
            throw new HttpException("User not found", 400);
        }
        if(await this.userRepository.delete(id)) {
            throw new HttpException("Succes delete user", 200);
        }
        else {
            throw new HttpException("Error database query", 500);
        }
    }

    async subscribe(id:number) {
        if( (await this.userRepository.findOne(id)).abonement == true){
            throw new HttpException("User has subscription", 400);
        }
        if(await this.userRepository.createQueryBuilder()
        .update(user)
        .set({abonement:true})
        .where({
            id
        })
        .execute()) throw new HttpException('Success subscribe', 200);
    }
}
