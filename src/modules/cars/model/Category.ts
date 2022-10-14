import { v4 as idV4 } from "uuid";

export class Category {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = idV4();
        }
    }
}
