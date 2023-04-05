import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch("products.json")
    const products =  await loadedProducts.json();

    const stordCart = getShoppingCart()
    const saveCart = []
    

    for(const id in stordCart){
        const addedProduct =  products.find(pd => pd.id === id)
        const quantity = stordCart[id]
        addedProduct.quantity = quantity; 
        saveCart.push(addedProduct)
    }

    return saveCart;
}

export default cartProductsLoader;