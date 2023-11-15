import React, { useState } from "react";
import "./failureModal.css";
import { IconFaceIdError } from "@tabler/icons-react";
import Button from "../../Button/button";

export default function FailureModal(props) {
  const [modal, setModalOn] = useState(true);
  setTimeout(() => {
    setModalOn(false);
  }, 3000);

  return (
    <>
      {modal && (
        <div className="reusableModalFailure">
          <div className="reusableModalFailureMain">
            <h3 className="reusableModalFailureHeader">
              <IconFaceIdError
                fill="var(--black-color1)"
                color="var(--red-color)"
                size={25}
              />
              {props.header || "Empty"}
            </h3>
            <p className="reusableModalFailureBody">{props.body || "Empty"}</p>
            <Button
              onClick={() => {
                setModalOn(false);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
