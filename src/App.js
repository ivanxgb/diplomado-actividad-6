import Form from "./components/form/Form";
import { useState } from "react";
import List from "./components/list/List";
import { useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [userList, setUserList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const saveUser = (user) => {
    setUserList([...userList, user]);
  };

  const remove = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  const edit = (user) => {
    setName(user.name);
    setLastname(user.lastname);
    setEditMode(true);
    setCurrentUser(user);
  };

  const saveEdit = () => {
    setUserList(
      userList.map((user) => {
        if (user.id === currentUser.id) {
          user.name = name;
          user.lastname = lastname;
        }
        return user;
      })
    );
    setEditMode(false);
    setName("");
    setLastname("");
  };

  useEffect(() => {
    console.log(userList);
  }, [userList]);

  return (
    <>
      <header className="mt-3">
        <h1 className="text-center">List Client</h1>
      </header>
      <main className="container mt-3">
        <Form
          name={name}
          setName={setName}
          lastname={lastname}
          setLastname={setLastname}
          saveUser={saveUser}
          editMode={editMode}
          saveEdit={saveEdit}
        />
        <List
          users={userList}
          remove={remove}
          editMode={editMode}
          edit={edit}
          setEditMode={setEditMode}
          setCurrentUser={setCurrentUser}
        />
      </main>
    </>
  );
}

export default App;
