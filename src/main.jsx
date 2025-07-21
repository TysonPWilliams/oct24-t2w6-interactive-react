import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokemonSearcher } from './components/PokemonSearcher.jsx.jsx'
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'
import { BaseLayout } from './pages/layout/BaseLayout.jsx'
import { UserJwtProvider } from './contexts/UserJwtProvider.jsx'
import { UserJwtContext } from './contexts/UserJwtContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <PokemonSearcher /> */}
  <UserJwtProvider>

  
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>Hello, homepage!</h1>} />
        <Route path="/about" element={<h1>Hello, about page!</h1>} />
        <Route path="/pokemon" element={<BaseLayout />}>
          {/* localhost:3000/pokemon */}
          <Route index element={<PokemonSearcher />} />
          {/* localhost:3000/pokemon/pikachu */}
          <Route path="/pokemon/:searchTerm" element={<PokemonSearcher />} />
        </Route>


      </Routes>
    </HashRouter>

    <HashRouter>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<h1>Hello, homepage!</h1>} />
          <Route path="/about" element={<h1>Hello, about page!</h1>} />
          <Route path="/pokemon" element={<Outlet />}>
            {/* localhost:3000/pokemon */}
            <Route index element={<PokemonSearcher />} />
            {/* localhost:3000/pokemon/pikachu */}
            <Route path="/pokemon/:searchTerm" element={<PokemonSearcher />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>

  </UserJwtProvider>
  </StrictMode>,
)
