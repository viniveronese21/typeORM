import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ name, description }: IRequest): void {
        const categoryAlredyExists = this.categoriesRepository.findByName(name);

        if (categoryAlredyExists) {
            throw new Error("Category Alredy exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}
