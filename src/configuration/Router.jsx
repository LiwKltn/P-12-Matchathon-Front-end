import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import GenerateTeams from '../views/GenerateTeams'
import Teams from '../views/Teams'
import Bootcamps from '../views/Bootcamps'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Bootcamps />} path='/' />
                    <Route element={<Home />} path='/addcoders' />
                    <Route element={<GenerateTeams />} path='/generateteams' />
                    <Route element={<Teams />} path='/teams' />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router