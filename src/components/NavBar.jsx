import { useState } from "react"
import { Link } from "react-router-dom";
import logo from "../assets/anime1.png"
import { FaAlignRight } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setOpen] = useState();

  const handleToggle = () => {
    setOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Animes" />
          </Link>
          <button type="button"
            className="nav-btn"
            onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links" }>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/animes">Animes</Link></li>
        </ul>
      </div>
    </nav>
  )
}
