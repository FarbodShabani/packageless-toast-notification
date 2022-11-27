import { useState } from "react";
import "./styles.css";
import {
  ToastConatiner,
  ToastBody,
  ButtonContainer,
  ShowToastButton
} from "./styled";

export default function App() {
  const [condition, setCondition] = useState(null);
  return (
    <>
      <ToastConatiner>
        <ToastBody
          show={condition !== null}
          condition={condition}
          onClick={() => setCondition(null)}
        >
          {condition === "success"
            ? "everything is okay!!"
            : condition === "error" && "something is wrong!!"}
        </ToastBody>
      </ToastConatiner>
      <ButtonContainer>
        <ShowToastButton
          disabled={condition !== null}
          success
          onClick={() => setCondition("success")}
        >
          show success toast notification
        </ShowToastButton>
        <ShowToastButton
          disabled={condition !== null}
          onClick={() => setCondition("error")}
        >
          show error toast notification
        </ShowToastButton>
      </ButtonContainer>
    </>
  );
}
