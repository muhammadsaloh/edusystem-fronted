import { 
    Link
} from 'react-router-dom'
import "./route.scss"

import { useState, useEffect } from 'react'

function Registration () {

	const [phone, setPhone] = useState("")
	const [name, setName] = useState("")
    const [bdate, setDate] = useState("")
	const [gender, setGender] = useState("")
	const [submit, setSubmit] = useState(false)
	const [span, setSpan] = useState("")

	useEffect(() => {
		if(submit && phone && name && bdate && gender) {

			;(async () => {
				const response = await fetch('http://192.168.1.57:9010/users/signup', {
					method: "post",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						phone,
						name,
                        bdate,
						gender
					})
				})

				const json = await response.json()
				console.log(json.message);

				setSubmit(false)
				setPhone("")
				setName("")
                setDate("")
				setGender("")
				setSpan(json.message)
			})()

		}
	}, [submit, phone, name, bdate, gender, span])

	return (
        <>
            <main className="main-registration">
                <div className="container">
                    <h1>Ferrari</h1>
                    <form
                    className="form"
                        onSubmit={e => {
                            e.preventDefault()
                            setSubmit(true)
                            e.target.reset()
                            setSpan()
                        }}
                    >
                        <h2>Registration in Ferrari</h2>
                        {/* { span == "Successfully registrated"} */}
                        <span className="alert">{span}</span>
                        <input
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
                        type="text"
                        required
                        placeholder="Ismingiz" 
                        autoComplete="off" 
                        spellCheck={false} 
                        autoFocus={true} 
                        name="name"
                        onKeyUp={e => setName (e.target.value.trim() )} 
                        />

                        <input 
                        type="date" 
                        name="bdate"
                        onChange={e => setDate (e.target.value.trim() )}
                        />

                        <select
                            defaultValue={gender}
                            onChange={e => setGender(e.target.value)}
                        >
                            <option value="" disabled={true}>Select gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>

                        <div>
                            <button>Registration</button>
                        </div>
                    </form>
                    <div className="one">
                        <span>Already have an account ?</span>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Registration