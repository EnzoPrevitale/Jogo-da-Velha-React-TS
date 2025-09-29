interface Props {
    value: string | null;
    onClick?: () => void;
}

export default function Quadrado({ value, onClick }: Props) {

    return (
        <button className="quadrado" onClick={onClick}>{value}</button>
    );
}