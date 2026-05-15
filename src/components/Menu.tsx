import React from 'react'
import { NavLink } from 'react-router-dom'

interface MenuItem {
  path: string
  label: string
  end?: boolean
}

const menuItems: MenuItem[] = [
  { path: '/', label: 'Главная', end: true },
  { path: '/drift', label: 'Дрифт-такси' },
  { path: '/timeattack', label: 'Time Attack' },
  { path: '/forza', label: 'Forza Karting' },
]

function Menu() {
  return (
    <nav className="menu">
      {menuItems.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.end}
          className={({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item'}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Menu
