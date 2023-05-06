import classnames from 'classnames'
import React, { FC } from 'react'

import cl from './style.module.scss'
import { tagListItemParams } from './types'

interface TagToggleProps {
	tag: tagListItemParams
	chosenTags: number[]
	onClick: (tag: tagListItemParams) => void
}

const TagToggle: FC<TagToggleProps> = ({ tag, chosenTags, onClick }) => {
	const tagItemStyles = classnames([cl.tagItem], {
		[cl.tagItemSelected]: chosenTags.some((chosenTag) => chosenTag === tag.id)
	})
	return (
		<label onClick={() => onClick(tag)} className={tagItemStyles}>
			{tag.label}
		</label>
	)
}

export default TagToggle
