import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-stone">
      <div className="font-display flex flex-col items-center px-6 text-center">
        <h1 className="font-display text-6xl mb-2 text-luxury-charcoal">zfashion</h1>
        <div className="w-[80%] h-0.5 bg-luxury-gold mx-auto mb-6"></div>
        <p className="font-sans text-gray-600 mb-8">zfashion coming soon</p>

        <div className="space-x-4">
          <Link to="/register" className="btn-primary inline-block">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary inline-block">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
