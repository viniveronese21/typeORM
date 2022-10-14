/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {

    constructor(private listcategoriesUseCase: ListCategoriesUseCase) { }

    handle(request: Request, response: Response): Response {

        const all = this.listcategoriesUseCase.execute();

        return response.json(all);
    }
}
