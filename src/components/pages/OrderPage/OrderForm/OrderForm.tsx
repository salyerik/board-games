import { FC } from 'react';

import OrderTotal from './OrderTotal';

import s from './OrderForm.module.sass';
import IconsSVG from '../../../UI/IconsSVG';

const OrderForm: FC = () => {
	return (
		<form action='#' className={s.wrapper}>
			<div className={s.addressInputs}>
				<div className={s.formTitle}>Shipping address</div>
				<label className={s.label}>
					<span>Country *</span>
					<input type='text' placeholder='Country' />
				</label>
				<label className={s.label}>
					<span>City *</span>
					<input type='text' placeholder='City' />
				</label>
				<label className={s.label}>
					<span>Street *</span>
					<input type='text' placeholder='Street' />
				</label>
				<label className={s.label}>
					<span>House *</span>
					<input type='text' placeholder='House' />
				</label>
				<label className={s.label}>
					<span>Apartment *</span>
					<input type='text' placeholder='Apartment' />
				</label>
				<div className={s.warningLabel}>* Required fields</div>
			</div>
			<div className={s.shippingMethod}>
				<div className={s.formTitle}>Shipping method</div>
				<div className={s.methodFlex}>
					<label className={s.methodLabel}>
						<IconsSVG id='order1' />
						<div className={s.methodText}>
							<span>Self-delivery from the store</span>
							<span>Free, today</span>
						</div>
						<input
							type='radio'
							name='shippingMethod'
							className='checkboxInput'
						/>
					</label>
					<label className={s.methodLabel}>
						<IconsSVG id='order2' />
						<div className={s.methodText}>
							<span>Self-delivery from 761 locations</span>
							<span>From 150$, 1 day</span>
						</div>
						<input
							type='radio'
							name='shippingMethod'
							className='checkboxInput'
						/>
					</label>
					<label className={s.methodLabel}>
						<IconsSVG id='order3' />
						<div className={s.methodText}>
							<span>Courier delivery</span>
							<span>From 180$, 1-3 days</span>
						</div>
						<input
							type='radio'
							name='shippingMethod'
							className='checkboxInput'
						/>
					</label>
					<label className={s.methodLabel}>
						<IconsSVG id='order4' />
						<div className={s.methodText}>
							<span>Mail delivery</span>
							<span>From 180$, to 3 days</span>
						</div>
						<input
							type='radio'
							name='shippingMethod'
							className='checkboxInput'
						/>
					</label>
				</div>
			</div>
			<div className={s.shippingMethod}>
				<div className={s.formTitle}>Payment methods</div>
				<div className={s.methodFlex}>
					<label className={s.methodLabel}>
						<IconsSVG id='order5' />
						<div className={s.methodText}>
							<span>Payment by card</span>
							<span>Card, Apple pay, Google pay</span>
						</div>
						<input
							type='radio'
							name='paymentMethod'
							className='checkboxInput'
						/>
					</label>
					<label className={s.methodLabel}>
						<IconsSVG id='order6' />
						<div className={s.methodText}>
							<span>Payment in cash</span>
							<span>to the courier upon receipt</span>
						</div>
						<input
							type='radio'
							name='paymentMethod'
							className='checkboxInput'
						/>
					</label>
				</div>
			</div>
			<div className={s.contactInputs}>
				<div className={s.formTitle}>Contact information</div>
				<label className={s.label}>
					<span>Last Name *</span>
					<input type='text' placeholder='Last Name' />
				</label>
				<label className={s.label}>
					<span>Name *</span>
					<input type='text' placeholder='Name' />
				</label>
				<label className={s.label}>
					<span>E-mail *</span>
					<input type='email' placeholder='E-mail' />
				</label>
				<label className={s.label}>
					<span>Phone number *</span>
					<input type='number' placeholder='Phone number' />
				</label>
				<div className={s.warningLabel}>* Required fields</div>
			</div>
			<div className={s.policyCheckboxes}>
				<label className={s.checkboxLabel}>
					<input className={'checkboxInput'} type='checkbox' />
					<span>Create an account</span>
				</label>
				<div className={s.policyText}>
					<span>
						By clicking the "Next" button, you accept the following terms and
						conditions{' '}
					</span>
					<a href='#'>Public offer</a>
					<span> and you give </span>
					<a href='#'>consent to personal data processing</a>.
				</div>
				<label className={s.checkboxLabel}>
					<input className={'checkboxInput'} type='checkbox' />
					<span>
						<span>From the provisions of. </span>
						<a href='#'>Public offer</a>
						<span> I am aware of and agree to</span>
					</span>
				</label>
				<label className={s.checkboxLabel}>
					<input className={'checkboxInput'} type='checkbox' />
					<span>
						<span>I give </span>
						<a href='#'>consent to personal data processing</a>
					</span>
				</label>
				<div className={s.alreadyLogged}>
					<span>Already registered? </span>
					<a href='#'>Log in</a>
				</div>
			</div>
			<OrderTotal />
			<button className={s.btn}>Pay</button>
		</form>
	);
};

export default OrderForm;
