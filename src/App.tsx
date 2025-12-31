import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { ForgotPassword } from './pages/ForgotPassword'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>

        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App