import { FilmeController } from "../controller/filme.controller.js";
import { Router } from "express";

const router = Router();
const filmeController = new FilmeController();


export {router as filmeRoutes};