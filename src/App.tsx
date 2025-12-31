import { Login } from './pages/auth/Login'
import { SignUp } from './pages/auth/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { ForgotPassword } from './pages/auth/ForgotPassword'
import { ResetPassword } from './pages/auth/ResetPassword'
import { NotFound } from './pages/NotFound'
import { EmailVerified } from './components/auth/EmailVerified'
import { VerifyResetCode } from './pages/auth/VerifyResetCode'
import { PATHS } from './constant/paths'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.LOGIN} element={<Login/>}/>
        <Route path={PATHS.SIGNUP} element={<SignUp/>}/>
        <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
        <Route path={PATHS.RESET_PASSWORD} element={<ResetPassword/>}/>
        <Route path={PATHS.VERIFY_EMAIL} element={<EmailVerified/>}/>
        <Route path={PATHS.VERIFY_CODE} element={<VerifyResetCode/>}/>
        <Route path='/' element={<Landing/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App