import Header from './components/Header/Header'
import HomePage from './pages/Home'
import styles from "./main.module.css"
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}
