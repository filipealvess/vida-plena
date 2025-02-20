import storage from '@/modules/storage/methods';
import { STORAGE } from '@/modules/storage/constants';

import { Types } from "@/constants/areas/index.d";
import { IStoredAreasById } from "@/modules/storage/areas/index.d";

function addGoal(area: Types, id: string) {
    const goals = list();

    goals[area] = {
        ...goals[area],
        goals: [
            ...(goals[area]?.goals ?? []),
            id,
        ],
    };

    storage.set<IStoredAreasById>(STORAGE.AREAS, goals);
}

function removeGoal(area: Types, id: string) {
    const areas = list();
    const found = areas[area];

    if (found === undefined) {
        return;
    }

    const updated = found.goals.filter(goal => goal !== id);

    storage.set<IStoredAreasById>(STORAGE.AREAS, {
        ...areas,
        [area]: {
            goals: updated,
        },
    });
}

function get(area: string) {
    const goals = list();

    return goals[area] ?? null;
}

function list() {
    const goals = storage.get<IStoredAreasById>(STORAGE.AREAS) ?? {};

    return goals;
}

const areas = {
    addGoal,
    removeGoal,
    get,
    list,
};

export default areas;
