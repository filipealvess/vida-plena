export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ref?: React.Ref<HTMLInputElement>;
    onDelete?: () => void;
    onSubmit?: () => void;
}
