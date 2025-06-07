import './Navbar.css'
import logo from '../assets/portfolio_logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="#intro"><img src={logo} className='logo' alt="logo" /></a>
      <nav>
        <a href='#intro'>Home</a>
        <a href='#aboutme'>About</a>
        <a href='#project'>Project</a>
        <a href='#contact'>Contact</a>
      </nav>
    </div>
  )
}

export default Navbar
