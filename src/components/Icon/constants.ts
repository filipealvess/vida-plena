import book from '@/assets/icons/book.svg';
import briefcase from '@/assets/icons/briefcase.svg';
import dollarSign from '@/assets/icons/dollar-sign.svg';
import heart from '@/assets/icons/heart.svg';
import sun from '@/assets/icons/sun.svg';
import user from '@/assets/icons/user.svg';
import users from '@/assets/icons/users.svg';

import {Icons} from '@/components/Icon/index.d';

const ICONS: Record<Icons, string> = {
    book,
    "dollar-sign": dollarSign,
    briefcase,
    heart,
    sun,
    user,
    users,
};

export {
    ICONS,
};
