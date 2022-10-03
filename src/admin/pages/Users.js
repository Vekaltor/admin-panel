import { useContext } from "react";
import LoggingContext from "../../contexts/LoggingContext";

function Users() {
  const { dataAdmin } = useContext(LoggingContext);

  return (
    <div>
      <h2 className="mt-4">
        <span>Users</span>
      </h2>

      <div className="d-flex justify-content-center mt-5">
        <table className="table-users">
          <tr>
            <th>Id</th>
            <th>Login</th>
            <th>Password</th>
          </tr>
          {dataAdmin.users.map((user, index) => (
            <tr key={user.id} className="my-3">
              <td className="me-5">{index + 1}.</td>
              <td className="me-4">{user.login}</td>
              <td>{user.pass}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Users;
