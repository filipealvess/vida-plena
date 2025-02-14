import {ICONS} from '@/components/Icon/constants';

import {IProps} from '@/components/Icon/index.d';

function Icon({
    icon,
    size = 24,
}: IProps) {
    return (
        <img
            src={ICONS[icon]}
            width={size}
            height={size}
        />
    );
}

export default Icon;
