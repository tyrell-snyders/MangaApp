import React, { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'

import api from './API/api.js'

//components
import Header from './Components/Header/Header'
import Layout from './Components/Layout'
import Home from './Components/Home/Home'
import Mng from './Components/Manga/Mng/Mng'
import Manhwa from './Components/Manga/Manhwa/Manhwa'
import Search from './Components/Search/Search'


function App() {
	const [comics, setComics] = useState([])
	const getTopManga = async () => {
		try {
			const res = await api.get('/api/comick/top_comics/manga')
			setComics(res.data.topFollowComics[7])
			console.log(res.data.topFollowComics[7])
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getTopManga()
	}, [])

	const [manga, setManga] = useState([])
	const getManga = async () => {
		try {
			const res = await api.get('/api/comick/top_comics/manga')
			setManga(res.data.recentRank)
		} catch (e) {
			console.log(e)
		}
	}
	
	useEffect(() => {
		getManga()
	}, [])

	const [manhwa, setManhwa] = useState([])
	const getManhwa = async () => {
		try {
			const res = await api.get('/api/comick/top_comics/manhwa')

			setManhwa(res.data.recentRank)
		} catch(e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getManhwa()
	}, [])

	return (
		<>
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/' element={<Home comics={comics} />} />
						<Route path='/Manga' element={<Mng mng={manga} />} />
						<Route path='/Manhwa' element={<Manhwa mhwa={manhwa} />} />
						<Route path='/Search' element={<Search />} />
					</Route>
				</Routes>
			</div>
		</>
	)
}

export default App
