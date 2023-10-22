import React, { useState } from "react";
import "./coffee.css";
export default function Coffee() {
  const [fold, setFolded] = useState();

  const Pays = [
    {
      id: 1,
      name: "TELEBIRR",
      account: "+251947053537",
      holderName: "Hailemelekot",
    },
    {
      id: 2,
      name: "BITCOIN",
      account: "251947053537251947053537",
      holderName: "BITCOIN ADDRESS",
    },
  ];

  return (
    <div className="coffeeContainer">
      <div className="coffeeLeft">
        <div className="coffeeBold">
          BUY ME{" "}
          <span style={{ color: "var(--primary-color" }}>A CUP OF COFFEE</span>
        </div>
        <div className="coffeeProductivity">
          Boost my productivity and build my mood with a cup of cofee
        </div>
        <div className="coffeePaymentContainer">
          {Pays.map((pay) => {
            return (
              <div className="coffeePaymentTelebirr" key={pay.id}>
                <div
                  onClick={() => {
                    setFolded(fold === pay.id ? null : pay.id);
                  }}
                  className="coffeePaymentTelebirrHead"
                >
                  <p>{pay.name}</p> <p>&darr;</p>
                </div>
                {fold === pay.id && (
                  <div className="coffeePaymentTelebirrAccount">
                    <code> {pay.account} </code>
                    <span>({pay.holderName})</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="coffeeRight">
        <img
          src={"/images/coffee-thumbnail.png"}
          width={300}
          height={"auto"}
          alt="Coffe"
        />
        <div className="coffeeHomeRhombus"></div>
        <div className="coffeeHomeCircle"></div>
        <div className="coffeeHomeRhombusGreen"></div>
      </div>
    </div>
  );
}
