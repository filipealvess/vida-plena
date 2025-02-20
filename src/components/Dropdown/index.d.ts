import { Icons } from '@/components/Icon/index.d';

export interface IProps {
    children?: React.ReactNode;
    icon?: Icons;
    options: IOption[];
}

export interface IOption {
    id: string | number;
    text: string;
    onClick: () => void;
    color?: string;
}
