// types
import { Request, Response } from 'express';

// services
import { CreateUserService } from '../../services/CreateUserService';

export const createUserMiddleware = (request: Request, response: Response) => {

    const { username, password } = request.body;

    const data = {
        username,
        password
    }

    const user = new CreateUserService().execute(data);

    return response.status(201).json(user);
}

export const getUserMiddleware = (request: Request, response: Response) => {
    const {id} = request.query;

    return response.status(200).json();
}