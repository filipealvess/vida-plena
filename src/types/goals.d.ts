import { Types as Areas } from "@/constants/areas/index.d";

export interface IGoal {
    id: string;
    name: string;
    endDate: string;
    checklist: IChecklist[];
    area: Areas;
}

export interface IChecklist {
    text: string;
    completed: boolean;
}
