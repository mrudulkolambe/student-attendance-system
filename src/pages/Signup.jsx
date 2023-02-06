import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';

const Signup = () => {
	const { handleSignup } = UserAuth();
	
	const initialState = {
		email: "",
		password: "",
		confirmpassword: ""
	}
	const [formState, setFormState] = useState(initialState);
	const[loading, setLoading] = useState(false)

	const handleFormChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		})
	}

	
	return (
		<>
			<Layout className="flex items-center justify-center" sidebar={false}>
				<form className='w-[40vw] bg-white p-10 rounded-xl shadow-xl flex flex-col gap-3'>
					<h1 className='text-4xl font-bold text-center'>Create Account</h1>
					<Input onChange={handleFormChange} label={"Email"} placeholder={"Enter your email"} id={"email"} type={"email"} />
					<Input onChange={handleFormChange} label={"Password"} placeholder={"Enter your password"} id={"password"} type={"password"} />
					<Input onChange={handleFormChange} label={"Confirm Password"} placeholder={"Confirm your password"} id={"confirmpassword"} type={"password"} />
					<span className='flex justify-center gap-2 font-bold'><p>Already have an account?</p><Link className='text-blue-500' to="/login">Login</Link></span>
					<button type='button' onClick={() => {handleSignup(formState, setLoading)}} className='w-fit m-auto bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg px-3 py-2 duration-300'>{loading ? <Spinner/> : "Create Account"}</button>
				</form>
			</Layout>
		</>
	)
}

export default Signup
