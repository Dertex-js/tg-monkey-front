import React, {
	ChangeEventHandler,
	FC,
	InputHTMLAttributes,
	useState
} from 'react'

import CustomRadioItem from './CustomRadioItem'

interface RadioItem extends InputHTMLAttributes<HTMLInputElement> {
	labelTitle: string
}

interface CustomRadioGroupProps {
	radioItemsList: RadioItem[]
	name: string
}

const CustomRadioGroup: FC<CustomRadioGroupProps> = ({
	radioItemsList,
	name
}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [value, setValue] = useState<string>()

	const radioChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value)
	}

	return (
		<>
			{radioItemsList.map((radio) => (
				<CustomRadioItem
					key={radio.id}
					name={name}
					onChange={radioChangeHandler}
					{...radio}
				/>
			))}
		</>
	)
}
export default CustomRadioGroup
