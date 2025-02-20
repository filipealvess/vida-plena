import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import styles from "@/core/pages/UpdateGoal/styles.module.css";
import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import Divider from "@/components/Divider";
import storage from "@/modules/storage";
import { checkArea } from "@/utils/areas";

import { IStoredChecklistById, IStoredChecklist, IStoredGoal } from "@/modules/storage/goals/index.d";

function UpdateGoalPage() {
    const [goal, setGoal] = useState<IStoredGoal | null>(null);
    const [name, setName] = useState('');
    const [endDate, setEndDate] = useState('');
    const [checklist, setChecklist] = useState({} as IStoredChecklistById);

    const params = useParams();
    const navigate = useNavigate();

    const hasEmptyItem = Object.values(checklist).find((item: IStoredChecklist) => (
        item.text === ''
    ));

    function addItem() {
        const ids = Object.keys(checklist);
        let id = 0;

        if (ids.length > 0) {
            id = Number(ids.sort((a, b) => Number(a) < Number(b) ? 1 : -1)[0]) + 1;
        }

        setChecklist(prev => ({
            ...prev,
            [id]: {
                id,
                text: '',
                completed: false,
            },
        }));
    }

    function handleChangeChecklist(id: number, text: string) {
        setChecklist(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                text,
            },
        }));
    }

    function handleChecklistBlur() {
        setChecklist(prev => {
            const clone = {...prev};

            for (const item in clone) {
                if (clone[item].text === '') {
                    delete clone[item];
                }
            }

            return clone;
        });
    }

    function handleDelete(id: number) {
        setChecklist(prev => {
            const clone = {...prev};

            delete clone[id];

            return clone;
        });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (goal === null) {
            return;
        }

        const items = {...checklist};

        for (const item in items) {
            if (items[item].text.trim().length === 0) {
                delete items[item];
            }
        }

        storage.goals.update(goal.id, {
            ...goal,
            name,
            endDate,
            checklist: items,
        });

        navigate(`/metas/${params.area}/${params.goal}`);
    }

    useEffect(() => {
        if (checkArea(params.area) === false) {
            navigate("/", { replace: true });
            return;
        }

        if (params.goal === undefined) {
            navigate(`/metas/${params.area}`, { replace: true });
            return;
        }

        const goal = storage.goals.get(params.goal);

        if (goal === null) {
            navigate(`/metas/${params.area}`, { replace: true });
            return;
        }

        setGoal(goal);
        setName(goal.name);
        setEndDate(goal.endDate);
        setChecklist(goal.checklist);

        document.title = 'Atualizar meta - Vida Plena';
    }, [params.area]);

    if (goal === null) {
        return (
            <p>Carregando...</p>
        );
    }

    return (
        <main className={styles.container}>
            <Header
                title='Atualizar meta'
                backRoute={`/metas/${params.area}/${params.goal}`}
            />

            <form className={styles.content} onSubmit={handleSubmit}>
                <Input
                    placeholder="Nome da meta"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    required
                />

                <Input
                    placeholder="Data de conclusão"
                    value={endDate}
                    type="date"
                    onChange={({target}) => setEndDate(target.value)}
                    required
                />

                <Divider title="Checklist" className={styles.divider} />

                {Object.values(checklist).map((item: IStoredChecklist) => (
                    <Input
                        key={item.id}
                        placeholder="Nome do item"
                        value={item.text}
                        onBlur={handleChecklistBlur}
                        onDelete={() => handleDelete(item.id)}
                        onChange={({target}) => handleChangeChecklist(item.id, target.value)}
                    />
                ))}

                <Button
                    disabled={hasEmptyItem}
                    onClick={addItem}
                    type="inline"
                >
                    + Adicionar
                </Button>

                <Button
                    htmlType="submit"
                    disabled={(
                        name.trim().length === 0 ||
                        endDate.trim().length === 0
                    )}
                >
                    ATUALIZAR
                </Button>
            </form>
        </main>
    );
}

export default UpdateGoalPage;
