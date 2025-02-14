import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import { TYPES } from "@/constants/areas";
import styles from "@/core/pages/Area/styles.module.css";
import Button from "@/components/Form/Button";
import GoalCard from "@/components/Cards/Goal";

import { Types } from "@/constants/areas/index.d";
import { IGoal } from "@/types/goals.d";

function AreaPage() {
    const [goals] = useState<IGoal[]>([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (TYPES.includes(params.area as Types) === false) {
            navigate("/", { replace: true });
            return;
        }

        document.title = `Metas ${params.area} - Vida Plena`;
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

                <Button onClick={() => null} type="inline">
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
