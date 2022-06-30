import axios from "axios"
import { iCommonState } from "../types/commonTypes"

const URL = 'http://localhost:3001/commonData'

const getData = async () => {
	const res = await axios.get<iCommonState>(URL)
	return res.data
}

export default getData