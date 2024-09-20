
import * as cartService from './services/cart.js';
import  createItem  from './services/itens.js';

const cart2 = [];

console.log('Welcome to a shopee cart!');

const compra1 = await createItem('celular', 1000, 1);
const compra2 = await createItem('notebook', 2500, 2);
const compra3 = await createItem('teclado', 50, 3);

await cartService.addCart(cart2, compra1);
await cartService.addCart(cart2, compra2);
await cartService.addCart(cart2, compra3);

// await cartService.deleteCart(cart2, compra2.name);
await cartService.removeItemCart(cart2, compra3);
await cartService.cartList(cart2);

const cart = await cartService.calculateCart(cart2);

console.log(`\nTotal: ${cart}`);