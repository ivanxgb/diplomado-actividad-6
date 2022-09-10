import React from "react";

const Item = ({ user, remove, editMode, edit }) => {
  const handleRemove = () => remove(user.id);

  const handleEdit = () => edit(user);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p className="m-0 align-middle">{`${user.name} ${user.lastname}`}</p>
      <div>
        <button className="btn btn-outline-success me-3" disabled={editMode} onClick={handleEdit}>
          Editar
        </button>
        <button className="btn btn-outline-danger" onClick={handleRemove} disabled={editMode}>
          {"\u00D7"}
        </button>
      </div>
    </li>
  );
};

export default Item;
