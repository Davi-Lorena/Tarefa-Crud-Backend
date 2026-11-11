import { FilmeController } from "../controller/filme.controller.js";
import { Router } from "express";

const router = Router();
const filmeController = new FilmeController();


router.post("/", filmeController.create)


router.delete("/:id", filmeController.create)


export {router as filmeRoutes};