import React, { useState } from "react";

function Sushi({ sushi, setMoney, money, plates, setPlates }) {
  const [isEaten, setIsEaten] = useState(false)
  const {name, img_url, price} = sushi

  function onIsEaten(){
    if((money - price) >= 0){
      setMoney(money - price)
      setPlates([...plates, 'hello'])
      setIsEaten(true)
    }
    else(alert("You don't have enough money for that!"))
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={onIsEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
