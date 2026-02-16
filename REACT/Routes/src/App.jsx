import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
const App = () => {
  return (
    <div>
<BrowserRouter>
   <Routes> 

 
 <Route path = '/' element = {<Layout/>}>
     <Route path = '/' element={<Landing/>}/>
    <Route path = '/home' element={<Home/>}/>
    <Route path = '/about' element={<About/>}/>
 </Route>

    <Route path = '*' element={<h1>Page Not Found 404</h1>}/>

   </Routes>
</BrowserRouter>

    </div>
  )
}

const Layout = () => {
    return (
        <>
         <Link to = '/'>Landing</Link> |
         <Link to = '/home'>Home</Link> |
         <Link to = '/about'>About</Link>
         <Outlet/>

         contact | about | home
        </>
    )
}

const Landing = () => {
    return (
    <>
 <h1>welcome to landingggg</h1>
    </>
    )
}


const Home = () => {
    return (
    <>
    <h1>This is Home</h1>
    </>
    )
    
} 

const About = () => {
    return (
    <>
    <h1>This is About</h1>
    </>
    )
    
} 




export default App