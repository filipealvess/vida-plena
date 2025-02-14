import styles from '@/components/Cards/Area/styles.module.css';

import {IProps} from '@/components/Cards/Area/index.d';
import Icon from '@/components/Icon';

function AreaCard({
    title,
    goals,
    icon,
}: IProps) {
    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <p>{title}</p>

                {icon !== undefined && (
                    <Icon icon={icon} />
                )}
            </header>

            <footer className={styles.footer}>
                <p>
                    <strong>{goals}</strong>
                    {goals !== 1 ? ' metas ' : ' meta '}
                    {goals !== 1 ? 'cadastradas' : 'cadastrada'}
                </p>
            </footer>
        </article>
    );
}

export default AreaCard;
