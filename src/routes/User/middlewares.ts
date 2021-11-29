import { Request, Response} from "express";

// services
import { CreateUserService } from '../../services/CreateUserService';

// User Repositorie
import { UsersRepositorie } from '../../repositories/UsersRepositorie';

// create instance of repositorie
const usersRepositorie = new UsersRepositorie();

export const createUserMiddleware = async (request: Request, response: Response) => {

    const { username, password } = request.body;

    const user = await new CreateUserService(usersRepositorie).execute({
        username,
        password
    });

    return response.status(201).json(user);
}
export const getUsersMiddleware = async (_: Request, response: Response) => {
    return response.status(200).json(await usersRepositorie.list());
}