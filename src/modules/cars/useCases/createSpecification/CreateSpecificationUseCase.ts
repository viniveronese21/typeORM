import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): void {
        const specificationsAlredyExists =
            this.specificationsRepository.findByName(name);

        if (specificationsAlredyExists) {
            throw new Error("Specification alredy exists");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}
