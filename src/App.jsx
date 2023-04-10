import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Converter from "./pages/Converter"
import Todo from "./pages/Todo"
import Signup from "./pages/Signup"
import Login from "./pages/Login"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/converter" element={<Converter />} />
          <Route path="/todo-list" element={<Todo />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
