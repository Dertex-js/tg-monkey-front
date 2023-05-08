import classnames from 'classnames'
import React, { FC } from 'react'

import { CustomButton } from 'UI'

import cl from './style.module.scss'

interface ProductItemProps {
	product: Product
	className: string
	onAdd: (product: Product) => void
}

export type Product = {
	id: string
	title: string
	description: string
	price: number
}

const ProductItem: FC<ProductItemProps> = ({ product, className, onAdd }) => {
	const onAddHandler = () => {
		onAdd(product)
	}

	return (
		<div className={classnames(cl.product, className)}>
			<div className={cl.img} />
			<div className={cl.title}>{product.title}</div>
			<div className={cl.description}>{product.description}</div>
			<div className={cl.price}>
				<span>Стоимость: {product.price}</span>
			</div>
			<CustomButton className={cl.addBtn} onClick={onAddHandler}>
				Добавить в корзину
			</CustomButton>
		</div>
	)
}

export default ProductItem
