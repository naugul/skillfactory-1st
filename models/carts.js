const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

let getCarts = () => {
    return fetch('https://fakestoreapi.com/carts/')
            .then(res=>res.json())
}

async function getCart(id) {
    return fetch('https://fakestoreapi.com/carts/'+id)
            .then(res=>res.json())
}

let carts = {
    getCarts,
    getCart,
}

module.exports = carts;