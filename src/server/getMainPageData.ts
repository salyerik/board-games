import axios from "axios"
import { iMainPageState } from "../types/mainPageTypes"

const URL = 'http://localhost:3001/mainPage'

const getData = async () => {
	const res = await axios.get<iMainPageState>(URL)
	return res.data
}

export default getData