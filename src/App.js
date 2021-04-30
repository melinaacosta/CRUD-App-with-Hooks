import React, { useState } from "react";
// import Contador from "./components/Contador.js";
// import Jsx from "./components/Jsx.js";
// import Listas from "./components/Listas.js";
// import Listas2 from "./components/Listas2.js";
// import Formulario from "./components/Formulario.js";
// import FormHook from "./components/FormHook.js";
// import FormCrud from "./components/FormCrud.js";
// import Comentario from "./components/Comentario.jsx";
import AddUserForm from "./crudComponents/AddUserForm";
import EditYo from "./crudComponents/EditUserForm";
import UserTable from "./crudComponents/UserTable";
import { v4 as uuidv4 } from "uuid";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Melina", username: "Acosta" },
    { id: uuidv4(), name: "Anabel", username: "García" },
    { id: uuidv4(), name: "Pedro", username: "Quintana" },
  ];

  const [users, setUsers] = useState(usersData);

  // agregar ususarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  // delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // edit user, pintar un form o el otro
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user=> (user.id === id ? updateUser : user)))
  }

  // const sujeto = {
  //   nombre: "Juanito",
  //   url: "https://via.placeholder.com/64",
  //   desc: "loremipsum"
  // }

  return (
    <div>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          {editing ? (
            <div className="flex-large">
              <h2>Edit user</h2>
              <EditYo 
              currentUser={currentUser}
              updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="flex-large">
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
      {/* <Comentario sujeto={sujeto}/> */}
    </div>
  );
}

export default App;
