export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: Types;
    htmlType?: 'button' | 'reset' | 'submit';
}

export type Types = 'filled' | 'outlined' | 'inline';
