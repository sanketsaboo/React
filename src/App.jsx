import Home from "./routes/home/home.component"
import { Routes, Route } from "react-router-dom"
import Navigation  from "./routes/navigation/navigation.component"
function App() {
  return (
    <Routes>
        <Route path='/' element={ <Navigation /> }>
          <Route index element={ <Home /> } />
          <Route path='shop' element={ <Shop /> } />
        </Route>
    </Routes>
  )
}

function Shop(){
  return(
    <div>
      Shop
    </div>
  )
}
export default App
