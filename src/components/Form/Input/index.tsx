import { useId } from 'react';
import styles from '@/components/Form/Input/styles.module.css';
import Icon from '@/components/Icon';

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

                {props.onDelete !== undefined && (
                    <button onClick={props.onDelete}>
                        <Icon icon='trash-danger' />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Input;
