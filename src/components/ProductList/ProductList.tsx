import { useTelegram } from 'hooks'
import React, { useState } from 'react'

import ProductItem, { Product } from './ProductItem'
import cl from './style.module.scss'

const products: Product[] = [
	{
		id: '1',
		title: 'Джинсы 1',
		price: 5000,
		description: 'Синего цвета, прямые'
	},
	{
		id: '2',
		title: 'Куртка 1',
		price: 12000,
		description: 'Синего цвета, теплая'
	},
	{
		id: '3',
		title: 'Джинсы 2',
		price: 4000,
		description: 'Синего цвета, зауженые'
	},
	{
		id: '4',
		title: 'Куртка 2',
		price: 17000,
		description: 'Синего цвета, легкая'
	},
	{
		id: '5',
		title: 'Джинсы 3',
		price: 6000,
		description: 'Синего цвета, прямые'
	},
	{
		id: '6',
		title: 'Куртка 3',
		price: 5000,
		description: 'Синего цвета, теплая'
	},
	{
		id: '7',
		title: 'Джинсы 4',
		price: 14000,
		description: 'Синего цвета, зауженые'
	},
	{
		id: '8',
		title: 'Куртка 4',
		price: 25000,
		description: 'Синего цвета, легкая'
	}
]

const getTotalPrice = (items: Product[] = []): number =>
	items.reduce((acc, item) => {
		acc += item.price
		return acc
	}, 0)

const ProductList = () => {
	const [addedItems, setAddedItems] = useState<Product[]>([])
	const { tg } = useTelegram()

	const onAdd = (product: Product) => {
		const alreadyAdded = addedItems?.find((item) => item.id === product.id)
		let newItems: Product[]

		if (alreadyAdded) {
			newItems = addedItems.filter((item) => item.id !== product.id)
		} else {
			newItems = [...addedItems, product]
		}

		setAddedItems(newItems)

		if (newItems.length === 0) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
			tg.MainButton.setParams({
				text: `Купить ${getTotalPrice(newItems)}`
			})
		}
	}

	return (
		<div className={cl.list}>
			{products.map((item) => (
				<ProductItem product={item} className="item" onAdd={onAdd} />
			))}
		</div>
	)
}

export default ProductList
