import { useContext } from "react";
import LoggingContext from "../../contexts/LoggingContext";

function Users() {
  const { dataAdmin } = useContext(LoggingContext);

  return (
    <div>
      <span>Fetched DATA</span>
      <div>
        {dataAdmin.users.map((user) => (
          <div key={user.id} className="my-3">
            {"login: " + user.login + ", pass: " + user.pass}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
