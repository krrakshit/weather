// eslint-disable-next-line no-unused-vars
import React from 'react'
import Weather from './components/Weather'
// eslint-disable-next-line no-unused-vars
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className='app'>
      <Weather/>
    </div>
  )
}

export default App
