import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import GenerateTeams from '../views/GenerateTeams'
import TeamsMatchathon from '../views/TeamsMatchathon'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<GenerateTeams />} path='/generateteams' />
                    <Route element={<TeamsMatchathon />} path='/teams' />                
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router
