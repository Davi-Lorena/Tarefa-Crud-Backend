import { Request, Response } from "express";
import { FilmeService } from "../services/filme.service.js";

const filmeService = new FilmeService();

export class FilmeController {

    async create(req: Request,res: Response)
    {
        await filmeService.create(req.body);
        res.status(201).send();
    }

    async delete(req: Request, res: Response)
    {   
        await filmeService.delete(Number(req.params.id));
        res.status(200).send();
    }

    async update(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const dados = req.body;
        
        const filmeAtualizado = await filmeService.update(id, dados);
        res.status(200).json(filmeAtualizado);
    }

    async findAll(req:Request, res:Response)
    {
        const filmes = await filmeService.findAll();
        res.status(200).json(filmes);
    }

    async findById(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const filme = await filmeService.findById(id);
        
        if (!filme) {
            res.status(404).json({ error: "Filme não encontrado" });
            return;
        }
        
        res.status(200).json(filme);
    }

}