import { useContext } from "react";
import LoggingContext from "../../contexts/LoggingContext";
import LogoutButton from "../LogoutButton";

function Settings() {
  const { dataAdmin } = useContext(LoggingContext);

  return (
    <div>
      <h2>Settings</h2>
      <div>
        {dataAdmin.list.map((element) => (
          <div key={element.id} className="my-3">
            {element.content}
          </div>
        ))}
      </div>
      <LogoutButton />
    </div>
  );
}

export default Settings;
