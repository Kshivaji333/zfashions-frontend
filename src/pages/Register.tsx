import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm, { type RegisterFormInputs } from '../components/auth/RegisterForm'
import RegisterHero from '../components/auth/RegisterHero'
import { clearError, registerUser } from '../store/authSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'

function Register() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { error, isLoading } = useAppSelector((state) => state.auth)

  useEffect(() => {
    return () => {
      dispatch(clearError())
    }
  }, [dispatch])

  const handleRegister = async (data: RegisterFormInputs) => {
    dispatch(clearError())

    const actionResult = await dispatch(
      registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
        role: 'CUSTOMER',
      }),
    )
    
    if (registerUser.fulfilled.match(actionResult)) {
      navigate('/')
    }
    
  }

  return (
    <div className="min-h-screen flex">
      <RegisterHero />
      <RegisterForm isLoading={isLoading} error={error} onSubmit={handleRegister} />
    </div>
  )
}

export default Register
