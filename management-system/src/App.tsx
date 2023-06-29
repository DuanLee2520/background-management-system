import { useState } from 'react' 


import {useRoutes,Link} from 'react-router-dom'
import router from './router'






function App() {
  const [count, setCount] = useState(0)
  
  const outlet = useRoutes(router)
  return (
    <div className="App">
    
      <h1>hello world</h1>
      <Link to="/home">Home</Link> and
      <Link to="/about">About</Link>
      {/*  Outlet这是一个占位符组件，类似于窗口，用于展示组件。 */}
      {outlet}
    </div> 
  )
}

export default App
