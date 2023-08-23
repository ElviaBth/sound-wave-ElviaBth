import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import SecondPage from '../pages/SecondPage'
import ThirdPage from '../pages/ThirdPage'

function Router() {
  return (
    <BrowserRouter basename='/sound-wave-ElviaBth'>
        <Routes>
            <Route path='/sound-wave-ElviaBth'  element={<App/>} />
            <Route path='/discover' element={<SecondPage/>} />
            <Route path='/join' element={<ThirdPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router