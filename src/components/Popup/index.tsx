import Button from "@/components/Form/Button";
import Icon from "@/components/Icon";
import styles from "@/components/Popup/styles.module.css";

import {IProps} from "@/components/Popup/index.d";

function Popup({
    title,
    visible,
    cancelText = 'Cancelar',
    children,
    okText = 'Ok',
    target = 'ok',
    danger = false,
    onCancel,
    onOk,
}: IProps) {
    if (visible === false) {
        return null;
    }

    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <header className={styles.header}>
                    <p>{title}</p>

                    <button onClick={onCancel}>
                        <Icon icon="x" />
                    </button>
                </header>

                <div>
                    {children}
                </div>

                <footer className={styles.footer}>
                    <Button
                        onClick={onCancel}
                        type={target !== 'cancel' ? 'outlined' : 'filled'}
                    >
                        {cancelText}
                    </Button>

                    <Button
                        onClick={onOk}
                        type={target !== 'ok' ? 'outlined' : 'filled'}
                        className={danger === false ? undefined : (
                            styles[target !== 'ok' ? 'danger-outlined' : 'danger-filled']
                        )}
                    >
                        {okText}
                    </Button>
                </footer>
            </section>
        </div>
    );
}

export default Popup;
