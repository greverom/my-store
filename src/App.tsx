import { BrowserRouter } from 'react-router-dom'
import   Layout from './components/layout/layout'
import './App.css'
import { GlobalStyles } from './styles/Layout/layout.styles'

function App() {

  return (
    <>
     <GlobalStyles /> 
      <BrowserRouter>  
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
