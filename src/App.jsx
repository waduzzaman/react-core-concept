

import './App.css'
import Counter from './Counter'
import Photos from './Photos'
import Posts from './Posts'
import Team from './Team'
import Users from './Users'


function App() { 

  return (
    <>
      
      <h1>Vite + React</h1>

      <Posts></Posts>

      <Photos></Photos>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
    
      <Person></Person>
    
     
    </>
  )
}

function Person(){
  return (

   <h3> Hi My Name is Mahbub  </h3>)
  
}

export default App
