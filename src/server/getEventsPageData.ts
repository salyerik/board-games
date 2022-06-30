import axios from "axios"
import { iEventsPageState } from "../types/eventsTypes"

const URL = 'http://localhost:3001/eventsPage/'

export const getData = async () => {
	const res = await axios.get<iEventsPageState>(URL)
	return res.data
}