const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

let getUsers = () => {
    return fetch('https://fakestoreapi.com/users/')
            .then(res=>res.json())
}

async function getUser(id) {
    return fetch('https://fakestoreapi.com/users/'+id)
            .then(res=>res.json())
}

let getUsersLimited = () => {
    return fetch('https://fakestoreapi.com/users?limit=3&sort=asc')
            .then(res=>res.json())
}

let users = {
    getUsers,
    getUser,
    getUsersLimited
}

module.exports = users