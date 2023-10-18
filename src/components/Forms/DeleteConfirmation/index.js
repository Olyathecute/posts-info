import Button from '../../Button/Button'
import style from '../Forms.module.scss'

function DeleteConfirmation({ close, confirm, selectedPosts }) {
  const message = `Are you sure you want to delete ${selectedPosts.length} post${selectedPosts.length > 1 ? 's' : ''}`

  return (
    <div className={style.container}>
      <p>{message}?</p>

      <div className={style.buttonsGroup}>
        <Button onClick={close} name='No' />
        <Button onClick={confirm} name='Yes' />
      </div>
    </div>
  )
}

export default DeleteConfirmation
