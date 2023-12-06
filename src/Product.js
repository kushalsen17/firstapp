import { useState } from "react"

function Product (props) {


    let [isAvailabe,setIsAvailable]=useState("yes")
    // function makeUnAvailable()
    // {
    //     setIsAvailable("no");

    // }

    return(
        <div className="Product">
            <img className="img" src={props.url} alt="">
            </img>
            <h1>{props.name}</h1>
            <p>RS {props.price}</p>
            <p>{isAvailabe}</p>
            <button onClick={()=>{setIsAvailable("no")}}>Click</button>
        </div>
    )

}

export default Product