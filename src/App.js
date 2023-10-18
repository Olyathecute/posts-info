import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from './store/postsSlice'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
