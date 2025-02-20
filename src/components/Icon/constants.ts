import book from '@/assets/icons/book.svg';
import briefcase from '@/assets/icons/briefcase.svg';
import dollarSign from '@/assets/icons/dollar-sign.svg';
import heart from '@/assets/icons/heart.svg';
import sun from '@/assets/icons/sun.svg';
import user from '@/assets/icons/user.svg';
import users from '@/assets/icons/users.svg';
import calendar from '@/assets/icons/calendar.svg';
import checkCircle from '@/assets/icons/check-circle.svg';
import checkSquare from '@/assets/icons/check-square.svg';
import square from '@/assets/icons/square.svg';
import moreVertical from '@/assets/icons/more-vertical.svg';
import x from '@/assets/icons/x.svg';
import trashDanger from '@/assets/icons/trash-danger.svg';

import {Icons} from '@/components/Icon/index.d';

const ICONS: Record<Icons, string> = {
    book,
    "dollar-sign": dollarSign,
    briefcase,
    heart,
    sun,
    user,
    users,
    calendar,
    "check-circle": checkCircle,
    "check-square": checkSquare,
    square,
    "more-vertical": moreVertical,
    x,
    "trash-danger": trashDanger,
};

export {
    ICONS,
};
