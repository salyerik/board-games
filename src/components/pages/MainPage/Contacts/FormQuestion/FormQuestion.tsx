import { FC } from "react"
import { Link } from "react-router-dom"
import { ErrorMessage, Field, Form, Formik } from "formik"
import cn from 'classnames'

import {
	mainPageInitialValues, mainPageInputs, mainPageValidation
} from "../../../../../utils/formFields"

import s from './FormQuestion.module.sass'

const FormQuestion: FC = () => {
	const onSubmit = (values: typeof mainPageInitialValues) => {
		alert(`${values.name} ожидайте ответа на вашей почте ${values.email}`)
	}

	return (
		<Formik
			initialValues={mainPageInitialValues}
			onSubmit={onSubmit}
			validationSchema={mainPageValidation}
		>
			<Form>
				{mainPageInputs.map(input => (
					<div key={input.id} className={s.input}>
						<label className={s.label} htmlFor={input.id}>{input.text}</label>
						<Field
							placeholder={input.text}
							className={cn(s.field, {
								[s.field__textarea]: input.id === 'comment'
							})}
							type={input.type} name={input.id} id={input.id}
						/>
						<div className={s.error}><ErrorMessage name={input.id} /></div>
					</div>
				))}
				<button className={s.btn} type="submit">Заказать звонок</button>
				<div className={s.policy}>
					<span>
						Нажимая на кнопку "Заказать звонок", я даю согласие на обработку
					</span>
					<Link to="/board-games/policy"> персональных данных.</Link>
				</div>
			</Form>
		</Formik>
	)
}

export default FormQuestion