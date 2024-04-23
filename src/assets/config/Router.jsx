import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import GenerateTeams from '../views/GenerateTeams'
import Teams from '../views/Teams'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<GenerateTeams />} path='/generateteams' />
                    <Route element={<Teams />} path='/teams' />
                  
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router
