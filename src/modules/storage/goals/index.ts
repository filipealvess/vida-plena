import storage from '@/modules/storage/methods';
import areas from '@/modules/storage/areas';
import { STORAGE } from '@/modules/storage/constants';
import { getId } from '@/modules/storage/goals/utils';

import { IStoredGoal, IStoredGoalById, IStoredChecklistById } from '@/modules/storage/goals/index.d';
import { IChecklistById } from '@/core/pages/NewGoal/index.d';
import { Types as Areas } from '@/constants/areas/index.d';

function add(
    area: Areas,
    name: string,
    endDate: string,
    items: IChecklistById,
) {
    const checklist: IStoredChecklistById = {};
    const timestamp = new Date().toISOString();

    const updated = list();

    const id = getId(timestamp, name);

    for (const item in items) {
        checklist[item] = {
            completed: false,
            id: items[item].id,
            text: items[item].text,
        };
    }

    updated[id] = {
        area,
        checklist,
        endDate,
        id,
        name,
        timestamp,
    };

    storage.set<IStoredGoalById>(STORAGE.GOALS, updated);
    areas.addGoal(area, id);
}

function update(id: string, data: IStoredGoal) {
    const goal = get(id);

    if (goal === null) {
        return;
    }

    const goals = list();

    storage.set<IStoredGoalById>(STORAGE.GOALS, {
        ...goals,
        [id]: data,
    })
}

function updateChecklist(id: string, checklist: IStoredChecklistById) {
    const goal = get(id);

    if (goal === null) {
        return;
    }

    update(id, {
        ...goal,
        checklist,
    });
}

function remove(id: string) {
    const goals = list();
    const found = goals[id];

    if (found === undefined) {
        return;
    }

    delete goals[id];

    storage.set<IStoredGoalById>(STORAGE.GOALS, goals);
    areas.removeGoal(found.area, id);
}

function get(id: string) {
    const stored = list();

    return stored[id] ?? null;
}

function list() {
    const stored = storage.get<IStoredGoalById>(STORAGE.GOALS);

    return stored ?? {};
}

const goals = {
    add,
    update,
    updateChecklist,
    remove,
    get,
    list,
};

export default goals;
