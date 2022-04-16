import BurgerMenu  from './Navigation/BurgerMenu'
import Header from './Navigation/Header'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <main id="outer-container">
        <Header />
        <BurgerMenu />
        <div className="mainContent" id="page-wrap">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}