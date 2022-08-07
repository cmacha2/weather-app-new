import { useEffect, useState } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([]);

  const onClose = (index) => {
    const newData = data.filter((item,i) => index !== i);
    setData(newData);
  }
  
  return (
    <div className={styles.wrapperApp}>
      <NavBar data={data} setData={setData} />
      <div className={styles.containerCards}>
        { data?.map((item, index) => {
          return <Card key={index} index={index} data={item} onClose={onClose}/>;
        })}
      </div>
    </div>
  );
}

export default App;
