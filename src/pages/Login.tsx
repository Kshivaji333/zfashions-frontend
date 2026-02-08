import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-stone px-6">
      <div className="luxury-card max-w-lg w-full text-center">
        <h1 className="font-display text-4xl text-luxury-charcoal mb-4">Login Page</h1>
        <p className="text-gray-600 mb-8">
          Login UI is not implemented yet. Use this placeholder while you continue building features.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="btn-secondary">
            Back Home
          </Link>
          <Link to="/register" className="btn-primary">
            Go To Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
