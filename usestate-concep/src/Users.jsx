import { use } from "react";
import User from "./User";

export default function Users({ userFetch }) {
  const users = use(userFetch);
//   console.log(users);
  return (
    <div>
      <h3> Users: {users.length}</h3>
      {
         users.map(user => <User key={user.id} user={user}></User>)
      }
    </div>
  );
}
