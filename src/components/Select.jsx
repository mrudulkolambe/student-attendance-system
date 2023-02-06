import React from 'react'

const Select = ({ id, label, onChange, options, value}) => {
	return (
		<>
			<div className='flex flex-col'>
				<label htmlFor={id} className="font-bold cursor-pointer mb-1">{label}: </label>
				<select value={value} onChange={onChange} id={id} name={id} className="px-3 py-2 border-2 border-blue-300 rounded-lg bg-blue-50 bg-opacity-25 focus:bg-blue-100 focus:bg-opacity-60 duration-200 outline-none">
					{
						options?.map((option, index) => {
							return <option value={option.value} key={"dropdown" + index}>{option.label}</option>
						})
					}
				</select>
			</div>
		</>
	)
}

export default Select
