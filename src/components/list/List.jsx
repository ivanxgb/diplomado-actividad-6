import React from "react";
import Item from "../item/Item";

const List = ({ users, remove, editMode, edit }) => {
  return (
    <>
      <ul className="mt-3 list-group">
        {users &&
          users.map((user, index) => (
            <Item
              key={`${user} ${index}`}
              user={user}
              remove={remove}
              edit={edit}
              editMode={editMode}
            />
          ))}
      </ul>
    </>
  );
};

export default List;
