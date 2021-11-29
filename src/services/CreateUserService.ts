// Model
import { User } from '../Model/User';

// Type
import { UserRequestType } from '../types/index'

export class CreateUserService {
    execute({username, password}: UserRequestType) {
        
        const user = new User();

        Object.assign(user, {
            username,
            password,
            created_at: new Date()
        });
        
        return user;
    };
}