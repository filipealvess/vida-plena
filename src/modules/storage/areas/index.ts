import storage from '@/modules/storage/methods';
import { STORAGE } from '@/modules/storage/constants';

import { Types } from "@/constants/areas/index.d";
import { IStoredAreasById } from "@/modules/storage/areas/index.d";

function addGoal(area: Types, id: string) {
    const goals = storage.get<IStoredAreasById>(STORAGE.AREAS) ?? {};

    goals[area] = {
        ...goals[area],
        goals: [
            ...(goals[area]?.goals ?? []),
            id,
        ],
    };

    storage.set(STORAGE.AREAS, goals);
}

function get(area: string) {
    const goals = storage.get<IStoredAreasById>(STORAGE.AREAS) ?? {};

    return goals[area] ?? null;
}

function list() {
    const goals = storage.get<IStoredAreasById>(STORAGE.AREAS) ?? {};

    return goals;
}

const areas = {
    addGoal,
    get,
    list,
};

export default areas;
