import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase_config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

const AuthContext = createContext();

const AuthenticationContext = ({ children }) => {
	const [user, setUser] = useState();
	const [userData, setUserData] = useState()
	const navigate = useNavigate()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
				const unsub = onSnapshot(doc(db, "students", user.uid), (doc) => {
					setUserData(doc.data());
				});
			} else {
				setUser()
				setUserData()
				navigate('/login')
			}
		});
	}, []);

	const handleSignup = (formState, setLoading) => {
		if (formState.password === formState.confirmpassword) {
			setLoading(true)
			createUserWithEmailAndPassword(auth, formState.email, formState.password)
				.then((userCredential) => {
					const user = userCredential.user;
					setUser(user);
					setDoc(doc(db, "students", user.uid), {
						email: user.email,
						uid: user.uid
					})
						.then(() => {
							setLoading(false);
							navigate('/profile');
						})
				})
				.catch((error) => {
					setLoading(false)
					console.dir(error)
				});
		} else {
			alert("Passwords doesn't match!");
		}
	}

	const handleSignIn = (formState, setLoading) => {
		setLoading(true)
		signInWithEmailAndPassword(auth, formState.email, formState.password)
			.then((userCredential) => {
				const user = userCredential.user;
				setLoading(false)
				setUser(user)
				navigate('/profile')
			})
			.catch((error) => {
				console.log(error)
				alert(error.message)
				setLoading(false)
			});
	}

	const logout = () => {
		signOut(auth).then(() => {
			setUser()
			navigate('/login')
		}).catch((error) => {
			alert(error.message)
		});
	}
	return (
		<AuthContext.Provider value={{ user, setUser, handleSignup, handleSignIn, logout, userData }}>
			{children}
		</AuthContext.Provider>
	)
}

const UserAuth = () => {
	return useContext(AuthContext)
}
export { AuthenticationContext, UserAuth }

