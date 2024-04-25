import { useEffect } from 'react'

import './App.css'
import Productos from './pages/Productos'

function App() {

  useEffect(() => {
    document.title = 'Educación IT - Applicación administración productos'
  }, [])
  
 
  return (
    <main className='container'>
      <h1 className='text-success display-2'>Hola mundo!</h1>
      <hr />
      <Productos />
    </main>
  )
}

export default App
