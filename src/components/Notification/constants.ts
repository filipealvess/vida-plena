import {Types} from '@/components/Notification/index.d';
import {Icons} from '@/components/Icon/index.d';

const ICONS: Record<Types, Icons> = {
    error: 'x-octagon',
    info: 'alert-circle',
    success: 'check-circle',
    warn: 'alert-triangle',
};

const COLOR_BY_TYPE: Record<Types, string> = {
    error: 'var(--danger)',
    info: 'var(--info)',
    success: 'var(--primary)',
    warn: 'var(--warn)',
};

export {
    ICONS,
    COLOR_BY_TYPE,
};
