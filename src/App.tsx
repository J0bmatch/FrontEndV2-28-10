import './globals.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesPage from './pages/routes'

export default function App() {
  return (
    <BrowserRouter>
      <RoutesPage/>
    </BrowserRouter>
  )
}