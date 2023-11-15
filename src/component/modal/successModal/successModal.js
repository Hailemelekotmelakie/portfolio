import React, { useState } from "react";
import "./successModal.css";
import { IconCircleCheck } from "@tabler/icons-react";
import Button from "../../Button/button";

export default function SuccessModal(props) {
  const [modal, setModalOn] = useState(true);
  setTimeout(() => {
    setModalOn(false);
  }, 3000);

  return (
    <>
      {modal && (
        <div className="reusableModal">
          <div className="reusableModalMain">
            <h3 className="reusableModalHeader">
              <IconCircleCheck
                fill="var(--primary-color)"
                color="var(--black-color1)"
                size={27}
              />
              {props.header || "Empty"}
            </h3>
            <p className="reusableModalBody">{props.body || "Empty"}</p>
            <Button
              onClick={() => {
                setModalOn(false);
              }}
            >
              Close
            </Button>
            <div className="reusableModalDiv"></div>
          </div>
        </div>
      )}
    </>
  );
}
