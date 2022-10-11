import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table"

function App() {
  const [data, setData] = useState([]);
  const [number, setnumber] = useState("1");
  useEffect(() => {
    async function getData() {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${number}`
      );
      setData(res.data);
      console.log(data);
    }
    getData();
  }, [number]);
  return (
    <>
    
    <div class = "pagination" >
      <a>&laquo;</a>
      <button onClick={() => setnumber("1")}>1</button>
      <button onClick={() => setnumber("2")}>2</button>
      <button onClick={() => setnumber("3")}>3</button>
      <button onClick={() => setnumber("4")}>4</button>
      <button onClick={() => setnumber("5")}>5</button>
      <button onClick={() => setnumber("6")}>6</button>
      <button onClick={() => setnumber("7")}>7</button>
      <button onClick={() => setnumber("8")}>8</button>
      <button onClick={() => setnumber("9")}>9</button>
      <button onClick={() => setnumber("10")}>10</button>
    
      <a>&raquo;</a>

      <Table type={number} data={data} />
      </div>
    </>
  );
}

export default App;
