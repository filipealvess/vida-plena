import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import styles from '@/core/pages/Goal/styles.module.css';
import Dropdown from '@/core/pages/Goal/components/Dropdown';
import storage from "@/modules/storage";
import InlineCard from "@/components/Cards/Inline";
import { getProgress } from "@/utils/goals";
import { enToPtBr } from "@/utils/dates";
import { checkArea } from "@/utils/areas";
import Divider from "@/components/Divider";
import Checkbox from "@/components/Form/Checkbox";
import Notification from "@/components/Notification";

import { IStoredChecklist, IStoredChecklistById, IStoredGoal } from "@/modules/storage/goals/index.d";

function GoalPage() {
    const [data, setData] = useState<IStoredGoal | null>(null);
    const [checklist, setChecklist] = useState({} as IStoredChecklistById);
    const [updated, setUpdated] = useState(false);

    const {state} = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    function handleCheck(id: number) {
        const item = checklist[id];

        if (item === undefined) {
            return;
        }

        setChecklist(prev => {
            const updated = {
                ...prev,
                [id]: {
                    ...prev[id],
                    completed: !prev[id].completed,
                },
            };

            storage.goals.updateChecklist(params.goal!, updated);

            return updated;
        });
    }
    useEffect(() => {
        if (state?.updated === true) {
            setUpdated(true);
        }
    }, [state]);

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

        setData(goal);
        setChecklist(goal.checklist);

        document.title = `${goal.name} - Vida Plena`;
    }, [params.area]);

    if (params.goal === undefined || data === null) {
        return (
            <p>Carregando...</p>
        );
    }

    return (
        <main className={styles.container}>
            <Header
                title='Detalhes da meta'
                backRoute={`/metas/${params.area}`}
                suffix={<Dropdown goal={data} />}
            />

            <section className={styles.data}>
                <h2>{data.name}</h2>

                <div className={styles.cards}>
                    <InlineCard icon="check-circle">
                        <strong>{getProgress(Object.values(checklist))} </strong>
                        concluído
                    </InlineCard>

                    <InlineCard icon="calendar">
                        até
                        <strong> {enToPtBr(data.endDate)}</strong>
                    </InlineCard>
                </div>

                <Divider title="Checklist" className={styles.divider} />

                {Object.keys(checklist).length === 0 && (
                    <p className={styles.feedback}>
                        Nenhum item cadastrado
                    </p>
                )}

                {Object.values(checklist).map((item: IStoredChecklist) => (
                    <Checkbox
                        key={item.id}
                        checked={item.completed}
                        label={item.text}
                        onChange={() => handleCheck(item.id)}
                    />
                ))}
            </section>

            <Notification
                onClose={() => setUpdated(false)}
                text="Meta atualizada com sucesso!"

                visible={updated}
                type="success"
            />
        </main>
    );
}

export default GoalPage;
