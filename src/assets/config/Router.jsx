import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import FormTeams from '../components/Atoms/FormTeams'
import New from '../views/New'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<FormTeams />} path='/ft' />
                    <Route element={<New />} path='/new' />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router