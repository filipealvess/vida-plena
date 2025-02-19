import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import styles from "@/core/pages/Area/styles.module.css";
import Button from "@/components/Form/Button";
import GoalCard from "@/components/Cards/Goal";
import storage from "@/modules/storage";
import { checkArea } from "@/utils/areas";

import { IGoal } from "@/types/goals.d";

function AreaPage() {
    const [goals, setGoals] = useState<IGoal[]>([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (checkArea(params.area) === false) {
            navigate("/", { replace: true });
            return;
        }

        document.title = `Metas ${params.area} - Vida Plena`;

        const area = storage.areas.get(params.area!);
        const goals = storage.goals.list();

        if (area === null || goals === null) {
            return;
        }

        const filtered: IGoal[] = [];

        Object.values(goals).forEach(goal => {
            if (area.goals.includes(goal.id)) {
                filtered.push({
                    area: goal.area,
                    checklist: Object.values(goal.checklist),
                    endDate: goal.endDate,
                    id: goal.id,
                    name: goal.name,
                })
            }
        });;

        setGoals(filtered);

    }, [params.area]);

    if (params.area === undefined) {
        return (
            <p>Carregando...</p>
        );
    }

    return (
        <main className={styles.container}>
            <Header
                title={`Metas ${params.area}`}
                backRoute="/"
            />

            <section className={styles.header}>
                <p>
                    <strong>{goals.length}</strong>
                    {goals.length !== 1 ? ' metas' : ' meta'}
                </p>

                <Button
                    onClick={() => navigate(`/metas/${params.area}/cadastro`)}
                    type="inline"
                >
                    + Adicionar
                </Button>
            </section>

            <div className={styles.content}>
                {goals.length === 0 && (
                    <p>As metas adicionadas aparecerão aqui</p>
                )}

                <section className={styles.grid}>
                    {goals.map(goal => (
                        <GoalCard
                            area={goal.area}
                            endDate={goal.endDate}
                            checklist={goal.checklist}
                            id={goal.id}
                            name={goal.name}
                            key={goal.id}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}

export default AreaPage;
