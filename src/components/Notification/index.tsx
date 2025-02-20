import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import {COLOR_BY_TYPE, ICONS} from '@/components/Notification/constants';
import styles from '@/components/Notification/styles.module.css';

import {IProps} from '@/components/Notification/index.d';

function Notification({
    onClose,
    text,
    visible,
    type,
}: IProps) {
    const [width, setWidth] = useState('100%');

    useEffect(() => {
        setWidth('100%');

        if (visible === false) {
            return;
        }

        setTimeout(() => setWidth('0%'), 50);
        setTimeout(onClose, 5000);
    }, [visible]);

    if (visible === false) {
        return;
    }

    return (
        <article className={styles.container}>
            {type !== undefined && <Icon icon={ICONS[type]} />}

            <p>{text}</p>

            <button onClick={onClose}>
                <Icon icon='x' />
            </button>

            <div style={{width, backgroundColor: type && COLOR_BY_TYPE[type]}} />
        </article>
    );
}

export default Notification;
