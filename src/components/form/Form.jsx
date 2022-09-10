import React from "react";

const Form = ({ name, setName, lastname, setLastname, saveUser, saveEdit, editMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    !editMode && saveUser({ name, lastname });
    editMode && saveEdit();
    setName("");
    setLastname("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Type name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          placeholder="Ivan"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Type lastname</label>
        <input
          className="form-control"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Gonzalez"
          value={lastname}
          onChange={({ target }) => setLastname(target.value)}
          required
        />
      </div>

      <button className={`btn w-100 ${editMode ? "btn-success" : "btn-primary"}`} type="submit">
        {editMode ? "Save Edit" : "Save User"}
      </button>
    </form>
  );
};

export default Form;
