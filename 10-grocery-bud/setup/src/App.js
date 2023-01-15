import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "",
    type: "",
  });

  const myAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    myAlert(true, "All items removed", "danger");
    setList([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      myAlert(true, "please enter an item", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setAlert(true, "item edited", "success");
      setName("");
      setIsEditing(false);
      setEditID(null);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      myAlert(true, `item '${name}' added!`, "success");
      setList([...list, newItem]);
      setName("");
    }
  };
  const removeItem = (id, title) => {
    myAlert(true, "item removed", "success");
    const newItems = list.filter((item) => id !== item.id);
    setList(newItems);
    console.log({ title });
  };

  const editItem = (id) => {
    const spesificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(spesificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={myAlert} />}
        <h3>grocery bud</h3>

        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g: tofu"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>{" "}
        </div>
      </form>
      <div className="grocery-container">
        <List
          items={list}
          removeItem={removeItem}
          list={list}
          editItem={editItem}
        />
        <button className="clear-btn" onClick={clearList}>
          clear values
        </button>{" "}
      </div>
    </section>
  );
}

export default App;
