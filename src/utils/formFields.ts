import * as Yup from 'yup'

export const mainPageInitialValues = { name: '', email: '', comment: '' }

export const mainPageInputs = [
	{ id: 'name', text: 'Your name', type: 'text' },
	{ id: 'email', text: 'Your E-mail', type: 'email' },
	{ id: 'comment', text: 'Your comment', type: 'text' },
]

export const mainPageValidation = Yup.object({
	name: Yup.string()
		.min(3, 'More then 3 symbols')
		.max(20, 'Max is 20 symbols')
		.required('Name is required'),
	email: Yup.string()
		.email('Invalid e-mail format')
		.required('E-mail is required'),
	comment: Yup.string()
		.min(20, 'Min is 20 symbols')
		.required('Comment is required'),
})