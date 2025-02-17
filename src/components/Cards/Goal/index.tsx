import { useNavigate } from 'react-router-dom';
import styles from '@/components/Cards/Goal/styles.module.css';
import { getProgress } from '@/utils/goals';
import { enToPtBr } from '@/utils/dates';

import { IProps } from '@/components/Cards/Goal/index.d';

function GoalCard({
    name,
    id,
    area,
    checklist,
    endDate,
}: IProps) {
    const navigate = useNavigate();

    const progress = getProgress(checklist);

    function handleClick() {
        navigate(`/metas/${area}/${id}`);
    }

    return (
        <article className={styles.container} onClick={handleClick}>
            <header className={styles.header}>
                <p>{name}</p>
            </header>

            <footer className={styles.footer}>
                <div className={styles.details}>
                    <p>
                        <strong>{progress}</strong> concluído
                    </p>

                    <p>
                        até <strong>{enToPtBr(endDate)}</strong>
                    </p>
                </div>

                <div className={styles.progress}>
                    <div style={{width: progress}} />
                </div>
            </footer>
        </article>
    );
}

export default GoalCard;
