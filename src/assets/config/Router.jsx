import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path='/' />
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router