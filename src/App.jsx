import { 
	BrowserRouter as Router, 
	Route, 
	Switch 
} from 'react-router-dom'

import React from 'react'
import About from './Router/About/route'
import Course from './Router/Course/route'
import Blog from './Router/Blog/route'
import Contact from './Router/Contact/route'
import Login from './Components/Login/route'
import Registration from './Components/Registration/route'
import "./App.scss"

function App () {

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<About />
					</Route>
					<Route path="/courses">
						<Course />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/registration">
						<Registration />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App

