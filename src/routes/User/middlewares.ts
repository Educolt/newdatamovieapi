import { Request, Response } from 'express';

export const createUserMiddleware = (request: Request, response: Response) => {
    return response.status(201).json();
}