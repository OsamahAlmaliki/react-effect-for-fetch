import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/OsamahAlmaliki/contact/`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {users && users.length > 0 && <UsersList users={users} />}
      </div>
    </section>
  );
}

export default UsersSection;
