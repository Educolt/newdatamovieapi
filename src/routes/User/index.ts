import express from "express";

import { createUserMiddleware, getUsersMiddleware} from './middlewares'

// create Users Router
export const UserRouter = express.Router();

// routes
UserRouter.post('/', createUserMiddleware);
UserRouter.get('/', getUsersMiddleware);