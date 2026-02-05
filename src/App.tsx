import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rigister from './pages/Rigister'
// import Login from './pages/Login'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Rigister />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/"
          element={
            <div className='min-h-screen flex items-center justify-center bg-luxury-stone'>
              <div className='font-display flex flex-col items-center'>
                <h1 className='font-display text-6xl mb-2 text-luxury-charcoal'>zfashion</h1>
                <div className='w-[80%] h-0.5 bg-luxury-gold mx-auto mb-6'></div>
                <p className='font-sans text-gray-600 mb-8'>
                  zfashion Comming Soon
                </p>
                <div className='space-x-4'>
                  <a
                    href="/rigister"
                    className='btn-primary inline-block'
                  >Get Started</a>
                  <a
                    href="/login"
                    className='btn-secondary inline-block'
                  >Sign in</a>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
