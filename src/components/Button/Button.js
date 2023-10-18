import style from './Button.module.scss'

function Button({ name, onClick }) {
  return (
    <button onClick={onClick} className={style.button}>
      {name}
    </button>
  )
}

export default Button
