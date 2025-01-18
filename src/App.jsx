import React from 'react'
import './styles/variables.css'
import './styles/global.css'
import './styles/themes.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/HomePage/HomePage'


function App() {


  return (
    <>
      <MainLayout>
        <HomePage/>
      </MainLayout>
    </>
  )
}

export default App
