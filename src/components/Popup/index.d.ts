export interface IProps {
    title: string;
    visible: boolean;
    cancelText?: string;
    okText?: string;
    children?: React.ReactNode;
    target?: 'ok' | 'cancel';
    danger?: boolean;
    onCancel?: () => void;
    onOk?: () => void;
}
