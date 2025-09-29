import styles from './Quadrado.module.scss';

interface Props {
    value: string | null;
    onClick?: () => void;
    vencedor?: boolean;
}

export default function Quadrado({ value, onClick }: Props) {

    return (
        <button className={styles.quadrado} onClick={onClick}>{value}</button>
    );
}