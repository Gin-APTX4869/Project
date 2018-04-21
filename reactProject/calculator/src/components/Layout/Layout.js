import React from 'react'
import Aux from '../../HOC/Aux'
import Header from '../Header'
// import Footer from '../Footer'

const Layout = (props) => (
    <Aux>
      <Header />
      <main>
          {props.children}
      </main>
      {/* <Footer /> */}
    </Aux>
  )
export default Layout
