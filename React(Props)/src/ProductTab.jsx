import Product from "./Product";

function ProductTab(){
    // let isDiscount = price >100000;
    // let styles = { isDiscount ? backgroundColor="": ""}

    return(
        <div>
            <Product title= "Iphone" price = {150000}/>
            <Product title= "Samsung" price = {100000}/>
            <Product title= "Mackbook" price = {300000}/>
        </div>
    )
}
export default ProductTab