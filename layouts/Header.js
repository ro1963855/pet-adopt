import Link from 'next/link'

function Header() {
  return (
    <header className="navbar navbar-dark bg-dark">
      <nav className="container-fluid">
      <Link href="/">
        <a className="navbar-brand">寵物領養</a>
      </Link>
      </nav>
    </header>
  )
}

export default Header