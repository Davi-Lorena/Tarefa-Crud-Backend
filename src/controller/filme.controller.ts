import { Request, Response } from "express";
import { FilmeService } from "../services/filme.service.js";

const filmeService = new FilmeService();

export class FilmeController{

    async create(req: Request,res: Response)
    {
        await filmeService.create(req.body);

        res.status(201).send()
    }

    async delete(req: Request, res: Response)
    {   
        await filmeService.delete(Number(req.params.id))

        res.status(200).send()

    }

    async update(req:Request, res:Response)
    {

    }

    async findAll(req:Request, res:Response)
    {

    }

    async findById(req:Request, res:Response)
    {

    }

}