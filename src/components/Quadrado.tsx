import styles from './Quadrado.module.scss';

interface Props {
    value: string | null;
    onClick?: () => void;
    vencedor: boolean;
}

export default function Quadrado({ value, onClick, vencedor }: Props) {

    return (
        <button className={vencedor ? `${styles.quadrado} ${styles.vencedor}` : `${styles.quadrado}`} onClick={onClick}>{value}</button>
    );
}