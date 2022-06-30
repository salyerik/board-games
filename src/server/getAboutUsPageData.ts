import axios from "axios"
import { iAboutUsState } from './../types/aboutUsPageTypes'

const URL = 'http://localhost:3001/aboutUsPage/'

export const getData = async () => {
	const res = await axios.get<iAboutUsState>(URL)
	return res.data
}