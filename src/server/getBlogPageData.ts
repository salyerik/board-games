import axios from "axios"
import { iBlogsState } from "../types/blogTypes"

const URL = 'http://localhost:3001/blogPage/'

export const getData = async () => {
	const res = await axios.get<iBlogsState>(URL)
	return res.data
}