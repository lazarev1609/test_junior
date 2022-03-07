import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { user } from "src/models/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./user.dto";

@Injectable()
export class UserService {

    constructor(@InjectRepository(user) private userRepository: Repository<user>) {};

    // Create new user
    async CreateUser(dto: CreateUserDto) : Promise<user> {                  
        const user = await this.userRepository.create(dto);
        await this.userRepository.save(user);
        return user;
    }

    // Get user
    async getUser(id:number) : Promise<user> {
        const user = await this.userRepository.findOne(id);
        console.log(user);
        return user;
    }

    // Delete user
    async deleteUser(id:number) : Promise<void> {
        await this.userRepository.delete(id);
    }
}