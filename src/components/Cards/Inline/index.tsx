import Icon from "@/components/Icon";
import styles from "@/components/Cards/Inline/styles.module.css";

import { IProps } from "@/components/Cards/Inline/index.d";

function InlineCard({
    children,
    icon,
}: IProps) {
    return (
        <section className={styles.container}>
            <Icon icon={icon} />

            <p>{children}</p>
        </section>
    );
}

export default InlineCard;
