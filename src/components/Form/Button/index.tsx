import styles from '@/components/Form/Button/styles.module.css';

import {IProps, Types} from '@/components/Form/Button/index.d';

const STYLES_BY_TYPE: Record<Types, string> = {
    filled: styles.filled,
    inline: styles.inline,
    outlined: styles.outlined,
};

function Button({
    children,
    onClick,
    type = 'filled',
}: IProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.container} ${STYLES_BY_TYPE[type]}`}
        >
            {children}
        </button>
    );
}

export default Button;
