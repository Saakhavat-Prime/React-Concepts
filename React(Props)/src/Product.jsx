import './Product.css'
function Product( {title,price}){
    let isDiscount = price > 100000;
    let styles = {backgroundColor : isDiscount ? "pink" : ""}

    return(

        <div>
            
            <div className="box" style={styles}>
                <h2>{title}</h2>
                <p>{price}</p>
                {/* {price > 100000 ? <p> Discount of 5%</p> : ""} */}
                {/* or  */}
                {isDiscount &&  <p> Discount of 5%</p> }

            </div>
        </div>
    )

}
export default Product