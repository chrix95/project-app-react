import React from 'react'
import HelloWorld from '../components/HelloWorld'

function Home () {
  return (
    <div>
      <h1 className="font-bold text-2xl">This is the homepage</h1>
      <HelloWorld name="devChris" />
    </div>
  )
}

export default Home
