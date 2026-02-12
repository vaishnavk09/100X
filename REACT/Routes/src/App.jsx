import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
  
    <Routes>
        <Route path="/" element={<Layout/>}>

                <Route path='/' element= {<Landing/>} />
                <Route path='/neet/online-coaching-class-11' element= {<Class11/>} />
                <Route path='/neet/online-coaching-class-12' element= {<Class12/>} />
       </Route>

        <Route path='*' element = {<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )


}

const Layout = ()=>{
    return(
        <>
  <Link to='/'>HOME</Link> | <Link to='/neet/online-coaching-class-11'>Class 11</Link> | <Link to='/neet/online-coaching-class-12'>Class 12</Link>
  <Outlet/>
  contact us | about us | terms and conditions | privacy policy
  </>
    )
}



const Landing = () =>{
    return(
        <div>
            <h1>Welcome to Allen</h1>
        </div>
    )
}

const Class11 = () =>{
    return(
        <div>
            <h1>Class 11th</h1>
        </div>
    )
    }

const Class12 = () =>{
    return(
        <div>        
            <h1>Class 12th</h1>
        </div>
    )
    }

const NotFound = () =>{
    return(
        <div>
            <h1>404 Not Found</h1>
                <p>pagal hai kya ye page exist hi nahi krta hai.</p>
        </div>)}


export default App