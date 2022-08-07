import React, { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar = ({ data, setData }) => {
  const [search, setSearch] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=2f27d02e47c04b51a58154822220708&q=${search}&aqi=no`
    );
    const info = await response.json();
    if (info.error) {
      alert("City not found");
      setSearch("");
    } else {
      if (data.length < 5) {
        if(data.find(item => item.location.name === info.location.name)){
          alert("City already added");
          setSearch("");
          return 
        }
        setData([...data, info]);
      } else {
        alert("You can only select 5 cities");
      }
      setSearch("");
    }
  };

  return (
    <nav>
      <div className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              style={{
                textDecoration: "none",
                color:` rgb(4, 5, 48)`,
                textTransform: "none",
              }}
              href="/"
            >
              Weather-App
            </a>
          </li>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Search a city"
              value={search}
              className={styles.inputSearch}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </form>
          <li className={styles.listItem}>
            <a
              style={{
                textDecoration: "none",
                color:` rgb(4, 5, 48)`,
                textTransform: "none",
              }}
              target="_blank"
              href="https://cmacha2-dev.vercel.app/"
            >
              About Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
