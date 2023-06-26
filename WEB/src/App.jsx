import { useState } from 'react'
import './App.css'
import SideMenu from './SideMenu/SideMenu'
import Form from './Form/Form'
import PullData from './Table/Main'

function App() {
  
  

  
  return (
    <>
      {/* <SideMenu Child={Form}/> */}
      <SideMenu Child={PullData}/>
      
    </>
  )
}

export default App
