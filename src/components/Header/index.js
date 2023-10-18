import style from './Header.module.scss'

function Header() {
  return (
    <header className={style.header}>
      <p className={style.logo}>Posts</p>
    </header>
  )
}

export default Header
