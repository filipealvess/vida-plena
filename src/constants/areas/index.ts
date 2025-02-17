import {IArea, Types} from '@/constants/areas/index.d';

const AREAS: IArea[] = [
    {
        goals: 0,
        icon: 'user',
        title: 'Pessoal',
        route: '/pessoais',
        id: 'pessoais',
    },
    {
        goals: 0,
        icon: 'heart',
        title: 'Familiar',
        route: '/familiares',
        id: 'familiares',
    },
    {
        goals: 0,
        icon: 'users',
        title: 'Social',
        route: '/sociais',
        id: 'sociais',
    },
    {
        goals: 0,
        icon: 'book',
        title: 'Intelectual',
        route: '/intelectuais',
        id: 'intelectuais',
    },
    {
        goals: 0,
        icon: 'sun',
        title: 'Espiritual',
        route: '/espirituais',
        id: 'espirituais',
    },
    {
        goals: 0,
        icon: 'briefcase',
        title: 'Profissional',
        route: '/profissionais',
        id: 'profissionais',
    },
    {
        goals: 0,
        icon: 'dollar-sign',
        title: 'Financeiro',
        route: '/financeiras',
        id: 'financeiras',
    },
];

const ICONS_BY_TYPE: Record<Types, string> = {
    pessoais: 'user',
    familiares: 'heart',
    sociais: 'users',
    intelectuais: 'book',
    espirituais: 'sun',
    profissionais: 'briefcase',
    financeiras: 'dollar-sign',
};

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
    ICONS_BY_TYPE,
};
