import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './Router/About/route'
import Course from './Router/Course/route'

import "./App.scss"

function App () {

	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<About />
					</Route>
					<Route path="/courses" exact>
						<Course />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App

