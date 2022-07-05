import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { iCardProduct } from "../../types/commonTypes"
import { iProductsState } from "../../types/productsType"

const initialState: iProductsState = {
	catalogItems: [],
	mainPageItems: [],
	questions: [
		{
			id: 1,
			title: 'Как выбрать настольную игру?',
			text: 'В нашем магазине представлен огромный ассортимент игр на любой вкус, но конечно же есть бессмертная классика настольных игр. Если вы только начинаете свой игровой путь, то мы рекомендуем вам легендарную "Монополию", знаменитую игры для вечеринок под названием "Активити", самые распространенные в мире настольные стратегии "Каркассон" и "Колонизаторы", простую и веселую игру, от которой невозможно оторваться, "Дженгу"',
		},
		{
			id: 2,
			title: 'Какие игры можете посоветовать новичку в настолках? ',
			text: 'В нашем магазине представлен огромный ассортимент игр на любой вкус, но конечно же есть бессмертная классика настольных игр. Если вы только начинаете свой игровой путь, то мы рекомендуем вам легендарную "Монополию", знаменитую игры для вечеринок под названием "Активити", самые распространенные в мире настольные стратегии "Каркассон" и "Колонизаторы", простую и веселую игру, от которой невозможно оторваться, "Дженгу"',
		},
		{
			id: 3,
			title: 'Какие игры сейчас самые популярные?',
			text: 'В нашем магазине представлен огромный ассортимент игр на любой вкус',
		},
		{
			id: 4,
			title: 'Можно ли ознакомиться с игрой вживую?',
			text: 'Но конечно же есть бессмертная классика настольных игр. Если вы только начинаете свой игровой путь, то мы рекомендуем вам легендарную "Монополию", знаменитую игры для вечеринок под названием "Активити", самые распространенные в мире настольные стратегии "Каркассон" и "Колонизаторы", простую и веселую игру, от которой невозможно оторваться, "Дженгу"',
		},
		{
			id: 5,
			title: 'Есть ли игры со скидками?',
			text: 'В нашем магазине представлен огромный ассортимент игр на любой вкус, то мы рекомендуем вам легендарную "Монополию", знаменитую игры для вечеринок под названием "Активити", самые распространенные в мире настольные стратегии "Каркассон" и "Колонизаторы", простую и веселую игру, от которой невозможно оторваться, "Дженгу"',
		},
		{
			id: 6,
			title: 'Как подобрать игру для ребенка?',
			text: 'Игр на любой вкус, но конечно же есть бессмертная классика настольных игр. Если вы только начинаете свой игровой путь, то мы рекомендуем вам легендарную "Монополию", знаменитую игры для вечеринок под названием "Активити", самые распространенные в мире настольные стратегии "Каркассон" и "Колонизаторы", простую и веселую игру, от которой невозможно оторваться, "Дженгу"',
		},
	]
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setCatalogItems: (state, action: PayloadAction<iCardProduct[]>) => {
			state.catalogItems = action.payload
		},
		setMainPageItems: (state, action: PayloadAction<iCardProduct[]>) => {
			state.mainPageItems = action.payload
		},
	}
})

export default productsSlice.reducer
export const { setCatalogItems, setMainPageItems } = productsSlice.actions