import { doc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Layout from '../components/Layout'
import Select from '../components/Select'
import { UserAuth } from '../context/AuthContext'
import { YEAR_OPTION, BRANCH_OPTIONS } from '../data'
import { db } from '../firebase_config'
import Spinner from '../components/Spinner'

const Profile = () => {
	const { userData, user } = UserAuth()
	const initialState = {
		email: "",
		name: "",
		rollno: "",
		branch: "",
		year: "",
		uid: ""
	}

	const [formState, setFormState] = useState(initialState);
	const [loading, setLoading] = useState(false)

	const handleFormChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}

	useEffect(() => {
		setFormState(userData)
	}, [userData]);

	const handleUpdateProfile = () => {
		setLoading(true)
		const userRef = doc(db, "students", `${user.uid}`);
		updateDoc(userRef, formState)
			.then(() => {
				setLoading(false)
				alert("Document updated!");
			})
	}

	return (
		<>
			<Layout sidebar={true} className="flex items-center">
				<form className='bg-white p-10 w-[80%] m-auto rounded-xl shadow-xl h-[80%] flex flex-col gap-3'>
					<h1 className='text-4xl font-bold text-center'>Profile</h1>
					{/* <Input label="Full Name" placeholder={"Enter your full name"} type="file" accept="image/*"/> */}
					<Input id="name" onChange={handleFormChange} value={formState?.name} label="Full Name" placeholder={"Enter your full name"} />
					<Input id="email" onChange={handleFormChange} value={formState?.email} readOnly={true} label="Email" placeholder={"Enter your email"} />
					<Input id="rollno" onChange={handleFormChange} value={formState?.rollno} label="Roll No." placeholder={"Enter your Roll No"} />
					<Select id="branch" onChange={handleFormChange} value={formState?.branch} label="Branch" placeholder={"Enter your Branch"} options={BRANCH_OPTIONS} />
					<Select id="year" onChange={handleFormChange} value={formState?.year} label="Year" placeholder={"Enter your Year"} options={YEAR_OPTION} />
					<button type='button' onClick={handleUpdateProfile} className='w-fit m-auto bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg px-3 py-2 duration-300'>{loading ? <Spinner /> : "Update"}</button>
				</form>
			</Layout>
		</>
	)
}

export default Profile