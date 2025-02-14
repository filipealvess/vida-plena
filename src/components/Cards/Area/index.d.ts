import { Icons } from "@/components/Icon/index.d";
import { Types } from "@/constants/areas/index.d";

export interface IProps {
    title: string;
    goals: number;
    icon?: Icons;
    route: `/${Types}`;
}
