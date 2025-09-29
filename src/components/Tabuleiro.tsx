import Quadrado from "./Quadrado";
import { useState } from "react";

export default function Tabuleiro() {
    const [ quadrados, setQuadrados ] = useState<Array<string | null>>(Array(9).fill(null));
    const [ xProximo, setXProximo ] = useState<boolean>(true);

    function handleClick(i: number) {
        if(quadrados[i]) {
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

    return (
        <>
        <div className="linha">
            <Quadrado value={quadrados[0]} onClick={() => handleClick(0)} />
            <Quadrado value={quadrados[1]} onClick={() => handleClick(1)} />
            <Quadrado value={quadrados[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="linha">
            <Quadrado value={quadrados[3]} onClick={() => handleClick(3)} />
            <Quadrado value={quadrados[4]} onClick={() => handleClick(4)} />
            <Quadrado value={quadrados[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="linha">
            <Quadrado value={quadrados[6]} onClick={() => handleClick(6)} />
            <Quadrado value={quadrados[7]} onClick={() => handleClick(7)} />
            <Quadrado value={quadrados[8]} onClick={() => handleClick(8)} />
        </div>
        </>
    );
}