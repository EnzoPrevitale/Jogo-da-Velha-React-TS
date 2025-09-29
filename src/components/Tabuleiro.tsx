import Quadrado from "./Quadrado";
import { useState } from "react";
import styles from './Tabuleiro.module.scss';

export default function Tabuleiro() {
    const [ quadrados, setQuadrados ] = useState<Array<string | null>>(Array(9).fill(null));
    const [ xProximo, setXProximo ] = useState<boolean>(true);

    function handleClick(i: number) {
        if(quadrados[i] || venceu) {
            return;
        }

        const nextQuadrado = quadrados.slice();
        
        if(xProximo) {
            nextQuadrado[i] = "X";
        } else {
            nextQuadrado[i] = "O";
        }
        setQuadrados(nextQuadrado);
        setXProximo(!xProximo);
    }

    const venceu = vencedor(quadrados);
    const velha: boolean = fim(quadrados);

    let status = "Próximo: " + (xProximo ? "X" : "O");
    if(venceu) {
        status = "Vencedor é: " + venceu[0];
    } else if(velha) {
        status = "Deu velha!";
    }

    return (
    <div className={styles.tabuleiro}>
        <h1 className={styles.status}>{status}</h1>
        <div className={styles.linha}>
            <Quadrado value={quadrados[0]} onClick={() => handleClick(0)} />
            <Quadrado value={quadrados[1]} onClick={() => handleClick(1)} />
            <Quadrado value={quadrados[2]} onClick={() => handleClick(2)} />
        </div>
        <div className={styles.linha}>
            <Quadrado value={quadrados[3]} onClick={() => handleClick(3)} />
            <Quadrado value={quadrados[4]} onClick={() => handleClick(4)} />
            <Quadrado value={quadrados[5]} onClick={() => handleClick(5)} />
        </div>
        <div className={styles.linha}>
            <Quadrado value={quadrados[6]} onClick={() => handleClick(6)} />
            <Quadrado value={quadrados[7]} onClick={() => handleClick(7)} />
            <Quadrado value={quadrados[8]} onClick={() => handleClick(8)} />
        </div>
    </div>
    );
}

function vencedor(quadrados: Array<string | null>): string | null {
    const linhas: Array<Array<number>> = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < linhas.length; i++) {
        const [ a, b, c ] = linhas[i];
        if(quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
            for(let j = 0; j < linhas[i].length; j++) {
                linhas[i][j]
            }
            return quadrados[a];
        }
    }
    return null;
}

function fim(quadrados: Array<string | null>): boolean {
    for(let i = 0; i < quadrados.length; i++) {
        if(!quadrados[i]) {
            return false;
        }
    }
    return true;
}