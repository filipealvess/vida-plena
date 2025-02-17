import { useNavigate } from 'react-router-dom';
import styles from '@/components/Header/styles.module.css';

import {IProps} from '@/components/Header/index.d';

function Header({
    title,
    backRoute,
    suffix,
}: IProps) {
    const navigate = useNavigate();

    function handleBack() {
        navigate(backRoute);
    }

    return (
        <header className={styles.container}>
            <button onClick={handleBack}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            <h1>{title}</h1>

            {suffix !== undefined && suffix}
        </header>
    );
}

export default Header;
