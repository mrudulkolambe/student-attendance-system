import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children, className = "", sidebar }) => {
	return (
		<>
			<section className={'h-screen w-screen bg-blue-100 Nunito flex'}>
				{sidebar ? <Sidebar /> : ""}
				<div className={sidebar ? `w-[80vw] h-screen ${className}` : `w-screen h-screen ${className}`}>{children}</div>
			</section>
		</>
	)
}

export default Layout
