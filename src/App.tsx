import { Login } from './pages/auth/Login'
import { SignUp } from './pages/auth/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { ForgotPassword } from './pages/auth/ForgotPassword'
import { ResetPassword } from './pages/auth/ResetPassword'
import { NotFound } from './pages/NotFound'
import { EmailVerified } from './components/auth/EmailVerified'
import { VerifyResetCode } from './pages/auth/VerifyResetCode'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/auth/reset-password" element={<ResetPassword/>}/>
        <Route path="/auth/verify-email" element={<EmailVerified/>}/>
        <Route path="/auth/verify-reset-code" element={<VerifyResetCode/>}/>
        <Route path='/' element={<Landing/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App