import { useNavigate } from 'react-router-dom';
import styles from '@/components/Cards/Area/styles.module.css';
import Icon from '@/components/Icon';

import {IProps} from '@/components/Cards/Area/index.d';

function AreaCard({
    title,
    goals,
    icon,
    route,
}: IProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/metas' + route);
    }

    return (
        <article className={styles.container} onClick={handleClick}>
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
