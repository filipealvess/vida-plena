import styles from '@/components/Form/Button/styles.module.css';

import {IProps, Types} from '@/components/Form/Button/index.d';

const STYLES_BY_TYPE: Record<Types, string> = {
    filled: styles.filled,
    inline: styles.inline,
    outlined: styles.outlined,
};

function Button({
    type = 'filled',
    htmlType = 'button',
    ...props
}: IProps) {
    return (
        <button
            {...props}
            type={htmlType}
            className={`${styles.container} ${STYLES_BY_TYPE[type]} ${props.className}`}
        >
            {props.children}
        </button>
    );
}

export default Button;
