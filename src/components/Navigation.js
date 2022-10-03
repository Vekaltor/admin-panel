import { NavLink } from "react-router-dom";

function Navigation({ listMenu, styles, icons }) {
  const { item, nav, list, navLink, icon, text } = styles;

  function getCorrectlyIcon(text) {
    let Icon = icons.find((icon) =>
      icon.name === text ? icon.IconComponent : null
    );
    return Icon.IconComponent;
  }

  const menu = listMenu.map((elementMenu) => (
    <li key={elementMenu.id} className={item}>
      <NavLink className={navLink} end to={elementMenu.path}>
        <div className=" d-flex justify-content-between align-items-center">
          {icons ? (
            <span className={icon} data-icon>
              <NavLink className={navLink} end to={elementMenu.path}>
                <span className="d-flex justify-content-center">
                  {getCorrectlyIcon(elementMenu.text)}
                </span>
              </NavLink>
            </span>
          ) : null}
          <span className={text} data-text>
            {elementMenu.text}
          </span>
        </div>
      </NavLink>
    </li>
  ));

  return (
    <nav className={nav}>
      <ul className={list}>{menu}</ul>
    </nav>
  );
}

export default Navigation;
