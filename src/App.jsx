import styled from 'styled-components'
import Header from './components/Header'
import About from './components/About'
import Product from './components/Product'
import { useState } from 'react'
import Footer from './components/Footer'

const AppStyled = styled.div`
  .products{
    border-block-start: 1px solid white;
    padding-inline: 1rem;
  }
  .flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-block-end: 1.5rem;
    gap: 2rem;
  }
  h2{
    text-align: center;
  }
`

function App() {

  const [dolls, setDolls] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])

  return (
    <AppStyled>
      <Header />
      <About />
      <div className="products">
        <h2>Mis muñecas 😊</h2>
        <div className="flex">
          {
            dolls.map( doll => {
              return <Product key={doll} />
            })
          }
        </div>
      </div>
      <Footer />
    </AppStyled>
  )
}

export default App
