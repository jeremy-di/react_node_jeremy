import Axios from '@/_services/caller.service'

let login = (credentials) => {
    return Axios.post('/login', credentials)
}

let register = (credentials) => {
    return Axios.post('/register', credentials)
}

let saveToken = (token => {
    localStorage.setItem('token', token)
})

let getToken = () => {
    return localStorage.getItem('token')
}

let logout = () => {
    localStorage.removeItem('token')
}

let isConnected = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let saveName = (name) => {
    localStorage.setItem('name', name)
}

let saveFirstName = (firstName) => {
    localStorage.setItem('firstName', firstName)
}

let getName = () => {
    let name = localStorage.getItem('name')
    return name
}

let getFirstName = () => {
    let firstName = localStorage.getItem('firstName')
    return firstName
}

export const userService = {
    login, register, saveToken, getToken, logout, isConnected, saveName, saveFirstName, getName, getFirstName
}