import { useId } from 'react';
import styles from '@/components/Form/Input/styles.module.css';
import Icon from '@/components/Icon';

import { IProps } from '@/components/Form/Input/index.d';

function Input(props: IProps) {
    const id = useId();

    function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== 'Enter') {
            return;
        }

        event.preventDefault();

        props?.onSubmit?.();
    }

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
                    ref={props.ref}
                    onKeyDown={props.onSubmit !== undefined ? handleSubmit : undefined}
                />

                {props.onDelete !== undefined && (
                    <button onClick={props.onDelete} type='button'>
                        <Icon icon='trash-danger' />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Input;
