import {IArea, Types} from '@/constants/areas/index.d';

const AREAS: IArea[] = [
    {
        goals: 0,
        icon: 'user',
        title: 'Pessoal',
        route: '/pessoais',
    },
    {
        goals: 0,
        icon: 'heart',
        title: 'Familiar',
        route: '/familiares',
    },
    {
        goals: 0,
        icon: 'users',
        title: 'Social',
        route: '/sociais',
    },
    {
        goals: 0,
        icon: 'book',
        title: 'Intelectual',
        route: '/intelectuais',
    },
    {
        goals: 0,
        icon: 'sun',
        title: 'Espiritual',
        route: '/espirituais',
    },
    {
        goals: 0,
        icon: 'briefcase',
        title: 'Profissional',
        route: '/profissionais',
    },
    {
        goals: 0,
        icon: 'dollar-sign',
        title: 'Financeiro',
        route: '/financeiras',
    },
];

const TYPES: Types[] = [
    'pessoais',
    'familiares',
    'sociais',
    'intelectuais',
    'espirituais',
    'profissionais',
    'financeiras'
];

export {
    AREAS,
    TYPES,
};
