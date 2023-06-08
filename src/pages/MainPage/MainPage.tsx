import React from 'react'

import Card from 'components/Card/Card'

type Titles = {
	title: string
	route: string
}

const MainPage = () => {
	const titles: Titles[] = [
		{ title: 'ТТК', route: '/ttk' },
		{ title: 'Расписание', route: '/scheduling' },
		{ title: 'Регламенты', route: '/regulations' },
		{ title: 'Стандарты', route: '/standards' },
		{ title: 'Правила безопасности', route: '/safety-regulations' },
		{ title: 'Чек листы', route: '/checklists' },
		{ title: 'Новости компании', route: '/company-news' }
	]
	return (
		<div className="grid h-[90vh] grid-cols-2 gap-[5%] p-[5%]">
			{titles.map((title) => (
				<Card key={title.title} title={title.title} route={title.route} />
			))}
		</div>
	)
}

export default MainPage
