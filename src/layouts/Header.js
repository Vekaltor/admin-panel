import Navigation from "../components/Navigation";

import { mainMenu } from "../data/DataMenu";

function Header() {
  const stylesForMenu = {
    item: "nav-item flex-grow-1",
    nav: "navbar navbar-dark bg-dark",
    list: "navbar-nav flex-row",
    navLink: "nav-link px-3",
  };

  return (
    <header className="sticky-top">
      <Navigation listMenu={mainMenu} styles={stylesForMenu} />
    </header>
  );
}

export default Header;
