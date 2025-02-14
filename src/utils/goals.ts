import { IChecklist } from "@/types/goals.d";

function getProgress(checklist: IChecklist[]): string {
    if (checklist.length === 0) {
        return '0.0%';
    }

    const total = checklist.length;
    let completed = 0;

    checklist.forEach(item => {
        if (item.completed === true) {
            completed++;
        }
    });

    return ((completed / total) * 100).toFixed(1) + '%';
}

export {
    getProgress,
};
