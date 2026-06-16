import { useState } from "react"
function LikeButton(){
    let [isClicked, setisClicked] = useState(false);

    let clicked = ()=>{
        setisClicked(!isClicked)
    }
return(
    <div>
      <p onClick={clicked}>❤️</p>
      <p>{isClicked.toString()}</p>
    </div>
)
}

export default LikeButton