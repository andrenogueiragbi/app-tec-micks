import axios from "axios";

const apiMck = axios.create({
    baseURL:'https://servicodados.ibge.gov.br/api/v1/'
})

export default apiMck
