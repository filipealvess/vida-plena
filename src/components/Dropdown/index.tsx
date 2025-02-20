import { useRef, useState } from 'react';
import Icon from '@/components/Icon';
import styles from '@/components/Dropdown/styles.module.css';
import useClickOutside from '@/hooks/useClickOutside';

import { IProps } from '@/components/Dropdown/index.d';

function Dropdown({
    options,
    children,
    icon,
}: IProps) {
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => setOpen(false));

    function handleClick(callback: () => void) {
        setOpen(false);
        callback();
    }

    return (
        <div className={styles.container} ref={ref}>
            <button onClick={() => setOpen(prev => !prev)}>
                {icon !== undefined && <Icon icon={icon} />}

                {children !== undefined && children}

                {(icon === undefined && children === undefined) && '???'}
            </button>

            {open === true && (
                <section className={styles.dropdown}>
                    {options.map(option => (
                        <button
                            key={option.id}
                            onClick={() => handleClick(option.onClick)}
                            style={{color: option.color}}
                        >
                            {option.text}
                        </button>
                    ))}
                </section>
            )}
        </div>
    );
}

export default Dropdown;
