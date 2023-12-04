import Post from './components/Post'
import styles from './App.module.css'
import EstiloGlobal from './styles'
import { Container } from './styles'
function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <div className={styles.app}>
          <Post imageUrl="https://m.media-amazon.com/images/I/51OkY3Fd43L._AC_UF894,1000_QL80_.jpg">
            Olha só que legal minha miniatura do Batmóvel.
          </Post>
        </div>
      </Container>
    </>
  )
}

export default App
