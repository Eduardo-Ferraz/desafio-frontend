import axios from "axios"

export const atasRequest = axios.create({
	baseURL:"https://desafio-iall.azurewebsites.net/api"
}) 