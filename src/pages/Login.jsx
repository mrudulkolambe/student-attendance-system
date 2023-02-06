import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
	const { handleSignIn } = UserAuth();

	const initialState = {
		email: "",
		password: "",
	}
	const [formState, setFormState] = useState(initialState);
	const [loading, setLoading] = useState(false)

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
					<h1 className='text-4xl font-bold text-center'>Login</h1>
					<Input value={formState.email} label={"Email"} placeholder={"Enter your email"} id={"email"} type={"email"} onChange={handleFormChange} />
					<Input value={formState.password} label={"Password"} placeholder={"Enter your password"} id={"password"} type={"password"} onChange={handleFormChange} />
					<span className='flex justify-center gap-2 font-bold'><p>Don't have an account?</p><Link className='text-blue-500' to="/">Signup</Link></span>
					<button type='button' onClick={() => {handleSignIn(formState, setLoading)}} className='w-fit m-auto bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg px-3 py-2 duration-300'>{loading ? <Spinner/> : "Login"}</button>
				</form>
			</Layout>
		</>
	)
}

export default Login