import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, setSushis, setMoney, money, plates, setPlates }) {
  const [sushiIndex, setSushiIndex] = useState(0)


  const displaySushi = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => {
      console.log(sushi)
      return <Sushi plates={plates} setPlates={setPlates} money={money} setMoney={setMoney} key={sushi.id} sushi={sushi}/>
    })
  

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton sushiIndex={sushiIndex} setSushiIndex={setSushiIndex}/>
    </div>
  );
}

export default SushiContainer;
