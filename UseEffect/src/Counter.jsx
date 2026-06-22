import {useState,useEffect} from "react"

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);
    let innCount = () => {
        setCountx(currCount => currCount + 1);
    }
    let innCounty = () => {
        setCounty(currCount => currCount + 1);
    }
    useEffect(function dosomething() {
        console.log("useEffect called");
    },[countx]);
    return (   
        <div className="">
            <h1>Counter</h1>
            <span >Countx: {countx}</span>
            <br />
            <button  onClick={innCount}>+1</button>
           < br /> <br/>
            <span >County: {county}</span>
            <br />
            <button  onClick={innCounty}>+1</button>
        </div>
    )
}