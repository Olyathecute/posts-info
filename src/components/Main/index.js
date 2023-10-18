import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../store/postsSlice'
import Table from '../Table'
import Button from '../Button/Button'
import style from './Main.module.scss'
import Creation from '../Forms/Creation'
import DeleteConfirmation from '../Forms/DeleteConfirmation'

function Main() {
  const dispatch = useDispatch()
  const [toAddPost, setToAddPost] = useState(false)
  const [toDeletePost, setToDeletePost] = useState(false)
  const [selectedPosts, setSelectedPosts] = useState([])

  const removePost = () => {
    dispatch(deletePost(selectedPosts))
    setSelectedPosts([])
  }

  useEffect(() => setToDeletePost(false), [selectedPosts])

  return (
    <div className={style.container}>
      <Table setSelectedPosts={setSelectedPosts} />
      <div className={style.buttonGroup}>
        <Button name='Add post' onClick={() => setToAddPost(true)} />
        <Button name='Delete post(s)' onClick={() => setToDeletePost(true)} />
      </div>

      {toAddPost && <Creation close={() => setToAddPost(false)} />}
      {toDeletePost && selectedPosts.length > 0 && (
        <DeleteConfirmation
          close={() => setToDeletePost(false)}
          confirm={() => {
            removePost()
            setToDeletePost(false)
          }}
          selectedPosts={selectedPosts}
        />
      )}
    </div>
  )
}

export default Main
