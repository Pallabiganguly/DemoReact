import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './COMPONENTS/Navbar'
import About from './COMPONENTS/About'
import Contact from './COMPONENTS/Contact'
import Login from './COMPONENTS/Login'
import Signup from './COMPONENTS/Signup'
import Home from './COMPONENTS/Home'
import { Route,Switch } from 'react-router-dom'
import Error from './COMPONENTS/Error'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch> 
      <Route exact path='/'>
        <Home />
      </Route >
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>

<Route>
  <Error/>
</Route>
</Switch>
    </div>
  )
}

export default App;