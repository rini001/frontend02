import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { History } from '../components/History'
import { HistoryDetail } from '../components/HistoryDetail'
// import { History } from '../components/History'
import { Home } from '../components/Home'
import { Mystery } from '../components/Mystery'
import { MysteryDetails } from '../components/MysteryDetails'
import { Mythology } from '../components/Mythology'
import { MythologyDetails } from '../components/MythologyDetails'
import { Technology } from '../components/Technology'
import { TechnologyDetails } from '../components/TechnologyDetails'
import { Navbar } from './Navbar'

export const RouteComponents = () => {
  return (
    <div>
        <Navbar />
			<Routes>
				
                <Route path="/" element={<Home />}></Route>
                <Route path="/mystery" element={<Mystery />}></Route>
                <Route path="/technology" element={<Technology />}></Route>
                <Route path="/mythology" element={<Mythology />}></Route>
				<Route path="/history" element={<History />}></Route>
				<Route path="/history/:userId" element={<HistoryDetail/>}></Route>
				<Route path="/mystery/:userId" element={<MysteryDetails/>}></Route>
				<Route path="/technology/:userId" element={<TechnologyDetails/>}></Route>
				<Route path="/mythology/:userId" element={<MythologyDetails/>}></Route>
			</Routes>
    </div>
  )
}
