import "./App.scss"

import { useState, useEffect } from 'react'

function App () {

	const [phone, setPhone] = useState("")
	const [name, setName] = useState("")
	const [gender, setGender] = useState("")
	const [submit, setSubmit] = useState(false)
	const [span, setSpan] = useState("")

	useEffect(() => {
		if(submit && phone && name && gender) {

			;(async () => {
				const response = await fetch('http://localhost:1231/users/signup', {
					method: "post",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						phone,
						name,
						gender
					})
				})

				const json = await response.json()
				// console.log(json.message);

				setSubmit(false)
				setPhone("")
				setName("")
				setGender("")
				setSpan(json.message)
			})()

		}
	}, [submit, phone, name, gender, span])

	return <div>

		<main>
			<div className="container">
				<form
				className="mt-4 form"
					onSubmit={e => {
						e.preventDefault()
						setSubmit(true)
						e.target.reset()
						setSpan()
					}}
				>
					<h2 className="text-center">Signup</h2>
					<span className="alert alert-primary">{span}</span>
					<input
					className="form-control my-3"
					type="number"
					required
					placeholder="Telefon raqam" 
					autoComplete="off" 
					spellCheck={false} 
					autoFocus={true}
					name="phone"
					onKeyUp={e => setPhone (e.target.value.trim() )} 
					/>

					<input 
					className="form-control my-3"
					type="text"
					required
					placeholder="Ismingiz" 
					autoComplete="off" 
					spellCheck={false} 
					autoFocus={true} 
					name="name"
					onKeyUp={e => setName (e.target.value.trim() )} 
					/>

					<select
						className="form-control my-3"
						defaultValue={gender}
						onChange={e => setGender(e.target.value)}
					>
						<option value="" disabled={true}>Select gender</option>
						<option value="1">Male</option>
						<option value="2">Female</option>
					</select>

					<div>
						<button className="btn btn-outline-primary w-100 my-3">Signup</button>
					</div>
				</form>
			</div>
		</main>
	</div>
}

export default App