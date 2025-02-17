export interface IChecklistById {
    [id: number]: IChecklist;
}

export interface IChecklist {
    id: number;
    text: string;
}
