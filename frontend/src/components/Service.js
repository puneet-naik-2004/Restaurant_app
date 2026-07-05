import { useEffect, useState } from "react";
import { userService } from "../services/userService";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;