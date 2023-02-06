import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Sidebar = () => {

	const {logout} = UserAuth()
	return (
		<>
			<nav className='w-[20vw] h-screen bg-gray-100'>
				<button onClick={logout} className='bg-red-500 hover:bg-red-600 duration-300 rounded-lg px-3 py-2 text-white font-bold'>Logout</button>
			</nav>
		</>
	)
}

export default Sidebar