import { useRef } from "react";

function ButtonMenu({ click }) {
  const buttonMenu = useRef();

  return (
    <div className="button-menu position-absolute start-0 top-0">
      <div ref={buttonMenu} onClick={(e) => click(buttonMenu, e)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default ButtonMenu;
