import { Router } from "express";
import { router as todoRouter, path as todoPath } from "./todo";

const router = Router();
const path = "/api/";

router.use(todoPath, todoRouter);

export { router, path };
