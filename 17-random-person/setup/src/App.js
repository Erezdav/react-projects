import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaTransgender,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const fetchUser = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    const person = data.results[0];
    const { email, phone, gender } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;

    const savedTime = person.dob.date;
    const year = new Date(savedTime).toLocaleString("en-US", {
      year: "numeric",
    });

    const { city, country, state } = person.location;
    const { age } = person.dob;

    console.log(person);
    const newPerson = {
      email,
      phone,
      image,
      password,
      name: `${first}  ${last}`,
      location: `${country}:${city} (${state})`,
      age: `${age}- born in ${year}`,

      gender,
    };

    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <main>
      {" "}
      <div className="block bcg-black"></div>;
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-title">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="gender"
              onMouseOver={handleValue}
            >
              <FaTransgender />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="location"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchUser}>
            {loading ? "loading..." : "randomuser"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
