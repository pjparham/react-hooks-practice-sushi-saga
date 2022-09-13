import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [money, setMoney]= useState(100)
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
    .then ((r => r.json()))
    .then((sushiData) => setSushis(sushiData))
  }, [])

  return (
    <div className="app">
      <SushiContainer plates={plates} setPlates={setPlates} money={money} setMoney={setMoney} sushis={sushis} setSushis={setSushis}/>
      <Table plates={plates} money={money} />
    </div>
  );
}

export default App;
