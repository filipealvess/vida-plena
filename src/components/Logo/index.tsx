import styles from '@/components/Logo/styles.module.css';

function Logo() {
    return (
        <article className={styles.container}>
            <img
                src="/favicon.svg"
                alt="Logotipo do aplicativo Vida Plena: folha verde flutuando"
            />

            <h1>Vida Plena</h1>
        </article>
    );
}

export default Logo;
