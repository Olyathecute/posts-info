import { createRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toAddPost } from '../../../store/postsSlice'
import Button from '../../Button/Button'
import style from '../Forms.module.scss'

function Creation({ close }) {
  const form = createRef()
  const dispatch = useDispatch()

  const [errors, setErrors] = useState({})

  const sendPost = () => {
    const currentErrors = {}
    const [title, post] = form.current

    if (!title.value) currentErrors.title = true
    if (!post.value) currentErrors.post = true

    if (Object.values(currentErrors).length) {
      setErrors(currentErrors)
    } else {
      dispatch(toAddPost({ title: title.value, body: post.value }))
      close()
    }
  }

  return (
    <div className={style.container}>
      <form ref={form}>
        <input type='text' name='title' placeholder='Title...' className={errors.title && style.error} />
        <textarea name='post' placeholder='Write your post...' className={errors.post && style.error}></textarea>
      </form>

      <div className={style.buttonsGroup}>
        <Button onClick={close} name='Close' />
        <Button onClick={sendPost} name='Send' />
      </div>
    </div>
  )
}

export default Creation
