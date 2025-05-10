import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokemonSearcher } from './components/PokemonSearcher.jsx.jsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { BaseLayout } from './pages/layout/BaseLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PokemonSearcher /> */}
    <BrowserRouter>
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
    </BrowserRouter>

<BrowserRouter>
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
</BrowserRouter>

  </StrictMode>,
)
