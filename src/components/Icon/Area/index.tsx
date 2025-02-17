import BaseIcon from "@/components/Icon";
import styles from '@/components/Icon/Area/styles.module.css';
import { ICONS_BY_TYPE } from "@/constants/areas";

import { IProps } from '@/components/Icon/Area/index.d';
import { Icons } from "@/components/Icon/index.d";
import { Types } from "@/constants/areas/index.d";

function AreaIcon({
    area,
}: IProps) {
    return (
        <div className={styles.container} title={area.toUpperCase()}>
            <BaseIcon
                icon={ICONS_BY_TYPE[area as Types] as Icons}
                size={18}
            />
        </div>
    );
}

export default AreaIcon;
