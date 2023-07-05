// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Menu from './Menu'
import Bill from './Bill'
import Nav from './components/Nav'
// import Animation from './components/Animation'
// import Counter from './components/Counter'
// import Greeting from './components/Greeting'
import { Route, Routes } from 'react-router-dom'
// import Bill from './components/Bill'
// import Menu from './components/Menu'


// interface People{
//   name:string
// }

// const listPeople: People[] = [
//   {
//     name:'David'
//   },
//   {
//     name:'Bobby'
//   }
// ]




function App() {
  // const [count, setCount] = useState(0)
  // const listing = listPeople.map(people=><Greeting name={people.name}/>)
  return (
    <div className='container'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Menu/>}></Route>
      <Route path='/bill' element={<Bill/>}></Route>
    </Routes>
      
    {/* <Greeting name={'David'}/> */}
    {/* {listing} */}
    </div>
  )
}

export default App
