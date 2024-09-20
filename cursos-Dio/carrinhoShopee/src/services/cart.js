
// 🚀 adiciona item ao carrinho
async function addCart(userCart, item) {
    return userCart.push(item);
}

// remove item do carrinho
async function removeItemCart(userCart, item) {

    const index = userCart.findIndex((element) => element.name === item.name);

    if (index == -1) {
        console.log(`item não encontrado!`);
        return
    }

    if ( userCart[index].quantity > 1) {
        userCart[index].quantity -= 1;
        userCart[index].subTotal = () => userCart[index].price * userCart[index].quantity;
        return 
        
    }

    if (userCart[index].quantity === 1) {
        return userCart.splice(index, 1);
    }

    

    // const delIndex = index - 1;

    // if(index >= 0 && index < userCart.length){
    //     userCart.splice(delIndex, 1);
    //     console.log(`\nItem deleted!`);
    // }
}

// limpa carrinho
async function deleteCart(userCart, name) {

    const item = userCart.findIndex(item => item.name === name);

    if (item !== -1) {
        userCart.splice(item, 1);
    }

}

async function cartList(userCart) {
    console.log(`\nWelcome to your cart list!`);
    userCart.forEach((item) => {
        console.log(`\nItem: ${item.name} \nPrice: ${item.price} \nQuantity: ${item.quantity} \nSubtotal: ${item.subTotal()}`);
    });
}

//🚀 calcula o valor do carrinho
async function calculateCart(userCart) {

    return userCart.reduce((subTotal, item) => subTotal + item.subTotal(), 0);
}

export { addCart, removeItemCart, deleteCart, calculateCart, cartList };