import { Header } from './components/header/Header'
import { Home } from './components/home/home'
import { Products } from './components/products/Products'
import './app.css'

function App() {
  return (
    <>
      <div>
        <Header/>
        <main>
          <Home/>
          <Products/>
        </main>
      </div>
    </>
  )
}

export default App
