import { useState } from 'react'
import './style/style.scss'

import Clock from './components/clock'
import Wheather from './components/wheather'
import QuickAccess from './components/quick_access_buttons'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content-wrapper'>
      <div className="App">
        <Clock />
        <Wheather />
        <div className='quick'>
          <QuickAccess/>

        </div>
      </div>
    </div>

  )
}

export default App
