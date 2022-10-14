import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryContoller } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

export const createCategoryController = new CreateCategoryContoller(
    createCategoryUseCase
);
