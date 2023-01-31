import React, { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'

import api from './API/api.js'

//components
import Header from './Components/Header/Header'
import Layout from './Components/Layout'
import Home from './Components/Home/Home'


function App() {
	const [comics, setComics] = useState()
	const getTopManga = async () => {
		await api.get('/api/comick/top_comics/manga').then(response => setComics(response.data.trending[7]))
	}

	useEffect(() => {
		getTopManga()
	}, [])
	console.log(comics)

	return (
		<>
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/' element={<Home comics={comics} />} />
					</Route>
				</Routes>
			</div>
		</>
	)
}

export default App
