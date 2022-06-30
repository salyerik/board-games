import { FC } from 'react'

import OrderTotal from './OrderTotal'

import s from './OrderForm.module.sass'
import IconsSVG from '../../../UI/IconsSVG'

const OrderForm: FC = () => {
	return (
		<form action='#' className={s.wrapper}>
			<div className={s.addressInputs}>
				<div className={s.formTitle}>Адрес доставки</div>
				<label className={s.label}>
					<span>Страна *</span>
					<input type="text" placeholder='Страна' />
				</label>
				<label className={s.label}>
					<span>Город *</span>
					<input type="text" placeholder='Город' />
				</label>
				<label className={s.label}>
					<span>Улица *</span>
					<input type="text" placeholder='Улица' />
				</label>
				<label className={s.label}>
					<span>Дом *</span>
					<input type="text" placeholder='Дом' />
				</label>
				<label className={s.label}>
					<span>Квартира *</span>
					<input type="text" placeholder='Квартира' />
				</label>
				<div className={s.warningLabel}>* Поля обязательные для заполнения</div>
			</div>
			<div className={s.shippingMethod}>
				<div className={s.formTitle}>Способ доставки</div>
				<div className={s.methodFlex}>
					<label className={s.methodLabel}>
						<IconsSVG id='order1' />
						<div className={s.methodText}>
							<span>Самовывоз из магазина</span>
							<span>Бесплатно,сегодня</span>
						</div>
						<input type="radio" name='shippingMethod' className='checkboxInput' />
					</label>
					<label className={s.methodLabel}>
						<IconsSVG id='order2' />
						<div className={s.methodText}>
							<span>Самовывоз из 761 пункта</span>
							<span>От 150$, 1 день</span>
						</div>
						<input type="radio" name='shippingMethod' className='checkboxInput' />
					</label>
					<label className={s.methodLabel}>
						<IconsSVG id='order3' />
						<div className={s.methodText}>
							<span>Курьерская доставка</span>
							<span>От 180$, 1-3 дня</span>
						</div>
						<input type="radio" name='shippingMethod' className='checkboxInput' />
					</label>
					<label className={s.methodLabel}>
						<IconsSVG id='order4' />
						<div className={s.methodText}>
							<span>Доставка почтой</span>
							<span>От 180$, от 3 дней</span>
						</div>
						<input type="radio" name='shippingMethod' className='checkboxInput' />
					</label>
				</div>
			</div>
			<div className={s.shippingMethod}>
				<div className={s.formTitle}>Способ оплаты</div>
				<div className={s.methodFlex}>
					<label className={s.methodLabel}>
						<IconsSVG id='order5' />
						<div className={s.methodText}>
							<span>Оплата картой</span>
							<span>карта,Apple pay,Google pay</span>
						</div>
						<input type="radio" name='paymentMethod' className='checkboxInput' />
					</label>
					<label className={s.methodLabel}>
						<IconsSVG id='order6' />
						<div className={s.methodText}>
							<span>Оплата наличными</span>
							<span>курьеру при получении</span>
						</div>
						<input type="radio" name='paymentMethod' className='checkboxInput' />
					</label>
				</div>
			</div>
			<div className={s.contactInputs}>
				<div className={s.formTitle}>Контактные данные</div>
				<label className={s.label}>
					<span>Фамилия *</span>
					<input type="text" placeholder='Фамилия' />
				</label>
				<label className={s.label}>
					<span>Имя *</span>
					<input type="text" placeholder='Имя' />
				</label>
				<label className={s.label}>
					<span>E-mail *</span>
					<input type="email" placeholder='E-mail' />
				</label>
				<label className={s.label}>
					<span>Телефон *</span>
					<input type="number" placeholder='Телефон' />
				</label>
				<div className={s.warningLabel}>* Поля обязательные для заполнения</div>
			</div>
			<div className={s.policyCheckboxes}>
				<label className={s.checkboxLabel}>
					<input className={'checkboxInput'} type='checkbox' />
					<span>Создать учетную запись</span>
				</label>
				<div className={s.policyText}>
					<span>Нажимая кнопку «Далее», Вы принимаете условия </span>
					<a href="#">Публичной оферты</a><span> и даете </span>
					<a href="#">согласие на обработку персональных данных</a>.
				</div>
				<label className={s.checkboxLabel}>
					<input className={'checkboxInput'} type='checkbox' />
					<span>
						<span>С положениями </span>
						<a href="#">Публичной оферты</a>
						<span> ознакомлен и согласен</span>
					</span>
				</label>
				<label className={s.checkboxLabel}>
					<input className={'checkboxInput'} type='checkbox' />
					<span>
						<span>Даю </span>
						<a href="#">согласие на обработку персональных данных</a>
					</span>
				</label>
				<div className={s.alreadyLogged}>
					<span>Уже зарегистрированы? </span>
					<a href="#">Войдите</a>
				</div>
			</div>
			<OrderTotal />
			<button className={s.btn}>Оплатить</button>
		</form>
	)
}

export default OrderForm