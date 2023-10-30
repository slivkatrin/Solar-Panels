import React from 'react'
import { Routing } from './feature/routing/Routing'
import './App.css'

function App() {
    return (
        <div className="flex flex-col min-h-screen w-full pt-20 sm:pt-24 md:pt-30">
            <Routing />
        </div>
    )
}

export default App
