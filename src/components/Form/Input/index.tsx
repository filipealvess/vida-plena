import { useId } from 'react';
import styles from '@/components/Form/Input/styles.module.css';

import { IProps } from '@/components/Form/Input/index.d';

function Input(props: IProps) {
    const id = useId();

    return (
        <div className={styles.container}>
            {props.placeholder !== undefined && (
                <label htmlFor={id}>
                    {props.placeholder}:
                </label>
            )}

            <div className={styles.content}>
                <input
                    {...props}
                    className={styles.input}
                    id={id}
                />
            </div>
        </div>
    );
}

export default Input;
