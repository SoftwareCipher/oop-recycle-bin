if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart);
    console.log(shopCart);
    clearBlock();
    document.querySelector('.cart-out').addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('delete')) {
            shopCart.goodsDelete(target.dataset['articul']);
            clearBlock();
            return true;
        }
        else if (target.classList.contains('plus')) {
            shopCart.goodsPlus(target.dataset['articul']);
            clearBlock();
            return true;
        }
        else if (target.classList.contains('minus')) {
            shopCart.goodsMinus(target.dataset['articul']);
            clearBlock();
            return true;
        }
    });
    function clearBlock() {
        document.querySelector('.cart-out').innerHTML = '';
        document.querySelector('.cart-out').append(shopCart.render());
        localStorage.setItem('cart', JSON.stringify(shopCart.items))
    }
}


