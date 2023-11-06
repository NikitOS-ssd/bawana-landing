import Header from './components/Header/Header'
import HomePage from './pages/Home'

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem 6rem' }}>
        <HomePage />
      </main>
    </>
  )
}
