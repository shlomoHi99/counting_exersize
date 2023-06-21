import React from 'react'
import Store from './components/Store'
import './App.css'
import Ticker from './components/Ticker'
import Timer from './components/Timer'

export default function App() {
  return (
    <div>
      <Ticker/>
      <Timer/>
      <Store/>
    </div>
  )
}
