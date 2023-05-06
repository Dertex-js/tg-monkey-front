import React, { FC } from 'react'

import TagToggle from './TagToggle'
import cl from './style.module.scss'
import { tagListItemParams } from './types'

interface CustomTagsProps {
	tagList: tagListItemParams[]
	chosenTags: number[]
	setTags: (tags: number[]) => void
}

// TODO refactor and final
const CustomTags: FC<CustomTagsProps> = ({ tagList, chosenTags, setTags }) => {
	const toggleHandler = (tag: tagListItemParams) => {
		const tags = chosenTags.includes(tag.id)
			? chosenTags.filter((chosenTag) => tag.id !== chosenTag)
			: [...chosenTags, tag.id]
		setTags(tags)
	}
	return (
		<div className={cl.tagList}>
			{tagList.map((tag) => (
				<TagToggle
					onClick={toggleHandler}
					key={tag.id}
					chosenTags={chosenTags}
					tag={tag}
				/>
			))}
		</div>
	)
}
export default CustomTags
