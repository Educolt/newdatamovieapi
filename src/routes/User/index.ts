import express from "express";

// middlewares
import { createUserMiddleware } from './middlewares'

// create Users Router
export const UserRouter = express.Router();

// routes
UserRouter.post('/create', createUserMiddleware);