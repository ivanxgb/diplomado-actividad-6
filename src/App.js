import Form from "./components/form/Form";
import { useState } from "react";
import List from "./components/list/List";
import { useEffect } from "react";
import { firebase } from "./firebase.js";
const COLLECTION_NAME = "usuarios";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [userList, setUserList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const saveUser = async (user) => {
    try {
      const db = firebase.firestore();
      const data = await db.collection(COLLECTION_NAME).add(user);
      setUserList([...userList, { id: data.id, ...user }]);
    } catch (error) {
      console.log(error);
    }
  };

  const remove = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection(COLLECTION_NAME).doc(id).delete();
      setUserList(userList.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const edit = async (user) => {
    setName(user.name);
    setLastname(user.lastname);
    setEditMode(true);
    setCurrentUser(user);
  };

  const saveEdit = async () => {
    try {
      const db = firebase.firestore();
      await db.collection(COLLECTION_NAME).doc(currentUser.id).update({ name, lastname });
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection(COLLECTION_NAME).get();
        const arrayData = data.docs.map((user) => ({
          id: user.id,
          ...user.data(),
        }));
        setUserList(arrayData);
      } catch (err) {
        console.log(err);
      }
    };

    obtenerDatos();
  }, [userList]);

  return (
    <>
      <header className="mt-3">
        <h1 className="text-center">Users</h1>
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
