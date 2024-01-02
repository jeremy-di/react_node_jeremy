import Axios from '@/_services/caller.service'

let getAllShips = () => {
    return Axios.get('/ships/all_ships')
}

let getShip = (id) => {
    return Axios.get(`/ships/one_ship/${id}`)
}

export const shipService = {
    getAllShips, getShip
}