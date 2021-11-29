// Model
import { User } from '../../Model/User';

// DTO - Data Transfer Object
import { ICreateUserDTO } from '../../types'

class UsersRepositorie {
    async create({username, password}: ICreateUserDTO) {
        // create model instance
        const user = new User();

        // assign values to the model instance
        Object.assign(user, {
            username,
            password
        });

        // save user on mongodb and return saved user
        return await user.save();
    }
    async list() {
        return await User.find();
    }
}
export { UsersRepositorie }