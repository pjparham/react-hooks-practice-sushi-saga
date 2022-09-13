import React from "react";

function MoreButton({ sushiIndex, setSushiIndex }) {
  function onMoreSushiClick(){
    if (sushiIndex === 96){
      setSushiIndex(0)
    }
    else{setSushiIndex(sushiIndex + 4)}

  }
  return <button onClick={onMoreSushiClick}>More sushi!</button>;
}

export default MoreButton;
