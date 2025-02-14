export interface IProps {
    children: string;
    onClick: () => void;
    type?: Types;
}

export type Types = 'filled' | 'outlined' | 'inline';
