import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import BmiCalculator from './components/BmiCalculator'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <div className="app-container fade-in">
          <BmiCalculator />
          <button
            onClick={() => setIsAuthenticated(false)}
            style={{ marginTop: '20px', background: 'transparent', border: 'none', opacity: 0.6, fontSize: '0.9rem' }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  )
}

export default App
