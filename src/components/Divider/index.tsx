import styles from '@/components/Divider/styles.module.css';

import { IProps } from '@/components/Divider/index.d';

function Divider({
    title,
    className = '',
}: IProps) {
    return (
        <header className={`${styles.container} ${className}`}>
            <p>{title}</p>
        </header>
    );
}

export default Divider;
