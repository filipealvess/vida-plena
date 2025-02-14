import { IChecklist } from "@/types/goals.d";
import { Types as Areas } from "@/constants/areas/index.d";

export interface IProps {
    name: string;
    checklist: IChecklist[];
    id: string;
    endDate: string;
    area: Areas;
}
