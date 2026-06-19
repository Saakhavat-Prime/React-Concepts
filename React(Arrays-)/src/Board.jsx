import { useState } from "react"

function Board (){
let [moves,setMoves] = useState(["NoMoves"]);

let updateMoves = () => {
    setMoves([...moves, "moves"])

}
    return(
        <div>
            <h4>Arrays</h4>
            <p>{moves}</p>
            <button onClick={updateMoves}>+Moves</button>
        </div>
    )

}

export default Board