import { useRef, useState } from "react";
import Navigation from "../components/Navigation";

import { adminMenu } from "../data/DataMenu";

import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import ButtonMenu from "./ButtonMenu";

const styles = {
  item: "nav-item text-end w-100",
  nav: "nav navbar-dark bg-primary h-100 pe-3 pt-5",
  list: "navbar-nav flex-column w-100 d-flex",
  navLink: "nav-link",
  icon: "h3 col-4",
  text: "me-2 h6 my-0 py-3 text-end col-8",
};

function Menu() {
  const menuRef = useRef();

  const [isActiveButton, setIsActiveButton] = useState(false);

  const icons = [
    { IconComponent: <FaHome />, name: "Home" },
    { IconComponent: <HiUsers />, name: "Users" },
    { IconComponent: <IoMdSettings />, name: "Settings" },
  ];

  let idSetTimeout = null;

  const handleMouseOver = () => {
    if (!isActiveButton) return;
    let menu = menuRef.current;
    clearTimeout(idSetTimeout);
    menu.classList.add("active");
  };

  const handleMouseOut = () => {
    if (!isActiveButton) return;
    let menu = menuRef.current;
    idSetTimeout = setTimeout(() => menu.classList.remove("active"), 1000);
  };

  const handleClick = (buttonMenu, e) => {
    let button = buttonMenu.current;

    button.classList.toggle("active");
    changeStyles();

    if (isActiveButton) closeMenu();
    setIsActiveButton(!isActiveButton);
  };

  const closeMenu = () => {
    let menu = menuRef.current;

    changeStyles();
    menu.classList.remove("active");

    clearTimeout(idSetTimeout);
  };

  const changeStyles = () => {
    let menu = menuRef.current;
    if (!isActiveButton) {
      hideIconMenu();
      showTextMenu();
      menu.classList.add("active");
    } else {
      showIconMenu();
      hideTextMenu();
      menu.classList.remove("active");
    }
  };

  const hideIconMenu = () => {
    let icons = document.querySelectorAll("[data-icon]");
    icons.forEach((icon) => icon.classList.add("hidden"));
  };

  const showIconMenu = () => {
    let icons = document.querySelectorAll("[data-icon]");
    icons.forEach((icon) => icon.classList.remove("hidden"));
  };

  const hideTextMenu = () => {
    let icons = document.querySelectorAll("[data-text]");
    icons.forEach((icon) => icon.classList.add("hidden"));
  };

  const showTextMenu = () => {
    let icons = document.querySelectorAll("[data-text]");
    icons.forEach((icon) => icon.classList.remove("hidden"));
  };

  return (
    <div
      ref={menuRef}
      className="menu-admin me-0"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ButtonMenu click={handleClick} />
      <Navigation listMenu={adminMenu} styles={styles} icons={icons} />
    </div>
  );
}

export default Menu;
