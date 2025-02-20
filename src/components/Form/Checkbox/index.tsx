import { useId } from 'react';
import styles from '@/components/Form/Checkbox/styles.module.css';
import Icon from '@/components/Icon';

import { IProps } from '@/components/Form/Checkbox/index.d';

function Checkbox({
    checked,
    label,
    onChange,
}: IProps) {
    const id = useId();

    return (
        <article className={styles.container} onClick={onChange}>
            <input
                type="checkbox"
                hidden
                checked={checked}
                id={id}
                onChange={() => onChange()}
            />

            <Icon
                icon={checked === true ? 'check-square' : 'square'}
            />

            <label
                className={checked === true ? styles.completed : ''}
                htmlFor={id}
            >
                {label}
            </label>
        </article>
    );
}

export default Checkbox;
