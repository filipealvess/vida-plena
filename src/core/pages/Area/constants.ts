import { INotification, Notifications } from '@/core/pages/Area/constants.d';

const NOTIFICATIONS: Record<Notifications, INotification> = {
    created: {
        icon: 'success',
        text: 'Meta criada com sucesso!',
    },
    deleted: {
        icon: 'info',
        text: 'A meta foi excluída',
    },
};

export {
    NOTIFICATIONS,
};
