import { Types as Areas } from "@/constants/areas/index.d";

export interface IStoredGoalById {
    [id: string]: IStoredGoal;
}

export interface IStoredChecklistById {
    [id: number]: IStoredChecklist;
}

export interface IStoredGoal {
    id: string;
    name: string;
    area: Areas;
    endDate: string;
    timestamp: string;
    checklist: IStoredChecklistById;
}

export interface IStoredChecklist {
    id: number;
    text: string;
    completed: boolean;
}
