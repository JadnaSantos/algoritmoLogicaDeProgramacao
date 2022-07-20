const products = {
    name: 'Pen',
    price: 9.99,
    sale: 0.15,
    priceWithSale() {
        return this.price * (1 - this.sale) 
    }
}

console.log(products.priceWithSale());
