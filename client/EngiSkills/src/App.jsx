import React from 'react'
import {CreatePost, Home} from "./pages"
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-["#e6ebf4"]'>
            <Link to="/">
            <h1 className='w-28 text-2xl'>EngiSkills</h1>
            </Link>
            <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-6 py-2 rounded-md'>Create</Link>
        </header>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
            <Route></Route>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App