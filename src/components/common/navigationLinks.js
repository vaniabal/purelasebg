import React from "react"
import { Link } from "gatsby"

const links = [
  {
    id: 1,
    path: "/advantages",
    text: "предимства",
  },
  { id: 2, path: "/prices", text: "цени" },
  { id: 3, path: "/gallery", text: "галерия" },
  { id: 4, path: "/faq", text: "информация" },
  {
    id: 5,
    path: "/contact",
    text: "контакти",
  },
]

export default function NavigationLinks({ navbarClasses }) {
  return (
    <div className={navbarClasses}>
      <ul className="navbar-nav ml-auto mr-md-2">
        {links.map(link => (
          <li className="nav-item" key={link.id}>
            <Link
              className="nav-link text-capitalize px-3 nav-link-style"
              to={link.path}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
