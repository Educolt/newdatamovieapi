// Create User Request type
import { ICreateUserRequest } from '../types';

// User repositorie
import { UsersRepositorie } from '../repositories/UsersRepositorie'

export class CreateUserService {
    constructor(private usersRepositorie: UsersRepositorie){}

    async execute({username, password}: ICreateUserRequest) {

       const user = await this.usersRepositorie.create({
           username,
           password
       });
        
        return user;
    };
}