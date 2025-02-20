import {Types} from '@/components/Notification/index.d';

export interface INotification {
    text: string;
    icon: Types;
}

export type Notifications = 'created' | 'deleted';
