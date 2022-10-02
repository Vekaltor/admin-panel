import { NavLink } from "react-router-dom";

const elementsMenu = [
  { id: 0, path: "/", text: "Start" },
  { id: 1, path: "/user", text: "Użytkownik" },
  { id: 2, path: "/admin", text: "Admin" },
];

function Navigation() {
  const listMenu = elementsMenu.map((elementMenu) => (
    <li key={elementMenu.id} className="nav-item flex-grow-1">
      <NavLink className="nav-link px-3" end to={elementMenu.path}>
        {elementMenu.text}
      </NavLink>
    </li>
  ));

  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="navbar-nav flex-row">{listMenu}</ul>
    </nav>
  );
}

export default Navigation;
