import React, { useState } from "react";
import "./coffee.css";
import { IconCaretRight } from "@tabler/icons-react";
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
          BUY ME <span>A CUP OF COFFEE</span>
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
                  <p>{pay.name}</p>
                  <p
                    className={
                      fold === pay.id ? "iconCaretRight" : "iconCaretLeft"
                    }
                  >
                    <IconCaretRight fill="var(--primary-color)" />
                  </p>
                </div>
                {fold === pay.id && (
                  <div className="coffeePaymentTelebirrAccount">
                    <code
                      onClick={() => {
                        navigator.clipboard.writeText(pay.account);
                      }}
                    >
                      {pay.account}{" "}
                    </code>
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
