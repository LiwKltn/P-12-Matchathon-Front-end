import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import GenerateTeams from '../views/GenerateTeams'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<GenerateTeams />} path='/generateteams' />
                  
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router
