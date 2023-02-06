import React from 'react'

const Input = ({ id, label, type="text", onChange, placeholder, accept, readOnly=false, value }) => {
	return (
		<>
			<div className='flex flex-col'>
				<label htmlFor={id} className="font-bold cursor-pointer mb-1">{label}: </label>
				<input value={value} readOnly={readOnly} accept={accept} type={type} onChange={onChange} placeholder={placeholder} id={id} name={id} className="read-only:cursor-pointer px-3 py-2 border-2 border-blue-300 rounded-lg bg-blue-50 bg-opacity-25 focus:bg-blue-100 focus:bg-opacity-60 duration-200 outline-none" />
			</div>
		</>
	)
}

export default Input
