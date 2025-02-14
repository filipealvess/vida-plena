import {Icons} from '@/components/Icon/index.d';

export interface IArea {
    title: string;
    goals: number;
    icon: Icons;
    route: `/${Types}`;
}

export type Types = (
    'pessoais' |
    'familiares' |
    'sociais' |
    'intelectuais' |
    'espirituais' |
    'profissionais' |
    'financeiras'
);
