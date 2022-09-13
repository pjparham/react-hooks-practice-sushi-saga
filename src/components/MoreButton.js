import React from "react";

function MoreButton({ sushiIndex, setSushiIndex }) {
  function onMoreSushiClick(){
    setSushiIndex(sushiIndex + 4)
  }
  return <button onClick={onMoreSushiClick}>More sushi!</button>;
}

export default MoreButton;
