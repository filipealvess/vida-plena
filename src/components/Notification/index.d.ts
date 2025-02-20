export interface IProps {
    text: string;
    visible: boolean;
    type?: Types;
    onClose: () => void;
}

export type Types = 'success' | 'warn' | 'info' | 'error';
